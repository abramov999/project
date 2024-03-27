import React, {useState, useEffect, useContext} from "react";


const AppContext= React.createContext<any>(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Ошибка при получении в useAppContext");
    }
    return context;
}

const AppProvider:React.FC<{children:React.ReactNode}> = ({children}) =>{
    const [items, setItems] = useState<any[]>([
        {
          id: 1,
          title: 'Dendy',
          img: 'dendy.jpg',
          desc: 'Dendy, или «Де́нди» (произносится как «Дэ́нди») — серия игровых приставок, неофициальный аппаратный клон приставки третьего поколения Famicom японской компании Nintendo. Dendy выпускались с конца 1992 года компанией Steepler, собирались на Тайване из китайских комплектующих по заказу Steepler и в основном продавались в России. Со временем приставки серии также начали собирать на китайском заводе Subor и на российском заводе «Тензор» в городе Дубна в Московской области.',
          category:'80s',
          price:'1000'
        },
    
        {
          id: 2,
          title: 'Sega',
          img: 'sega.jpg',
          desc: 'Sega Mega Drive (яп. メガドライブ Мэга Дорайбу), в Северной Америке известна как Sega Genesis — игровая приставка четвёртого поколения, разработанная и выпускавшаяся компанией Sega. Приставка была выпущена в 1988 году в Японии как Mega Drive, в 1989 году в США как Genesis и в 1990 году в Европе (Virgin Mastertronic), Австралии (Ozisoft) и Бразилии (Tec Toy) — вновь под названием Mega Drive',
          category:'80s',
          price:'1200'
        },
    
        {
          id: 3,
          title: 'SNES',
          img: 'snes.jpg',
          desc: 'Super Nintendo Entertainment System (также известная как Super Nintendo, Super NES и SNES[K 2]) — 16-битная игровая приставка, выпущенная компанией Nintendo в США, Бразилии, Европе и Австралии. В Японии она известна под названием Super Famicom (яп. スーパーファミコン су:па:фамикон), сокращение от Super Family Computer, или SFC. В Южной Корее она называлась Super Comboy (кор. 슈퍼 컴보이 Сюпхо кхомбои) и распространялась Hyundai Electronics. Хотя все перечисленные версии консоли одинаковы, региональная блокировка делает невозможной совместимость картриджей из разных стран.',
          category:'90s',
          price:'1200'
        },
    
        {
          id: 4,
          title: 'Vectrex',
          img: 'vectrex.jpg',
          desc: 'Vectrex — 8-разрядная игровая консоль, разработанная General Consumer Electric (GCE), позже купленная Milton Bradley Company. «Vectrex» уникальна тем, что это единственная игровая система, использующая векторный графический монитор; ни одна другая система ни до, ни после неё, не использовала подобную конфигурацию. «Vectrex» продавалась потребителям с 1982 года по цене в 199 долл.; продажи устройства прекратились в 1984, во время спада на рынке игровых консолей.',
          category:'80s',
          price:'500'
        },
    
        {
          id: 5,
          title: 'Nintendo64',
          img: 'nintendo64.jpg',
          desc: 'Nintendo 64 (яп. ニンテンドー64 Нинтэндо: Рокудзю:ён), также Ultra 64 и N64 — 64-разрядная игровая приставка. Разрабатывалась японской компанией Nintendo совместно с Silicon Graphics. Была выпущена в 1996 году (23 июня в Японии, 29 сентября в Америке) и в 1997 году (1 марта в Европе, Ближнем Востоке и Африке и Китае и 1 сентября во Франции и Бенилюксе) и стала ответом на приставки конкурентов Sony PlayStation и Sega Saturn.',
          category:'90s',
          price:'1300'
        },
    
        {
          id: 6,
          title: 'Atari',
          img: 'atari.jpg',
          desc: 'Atari VCS, позже названная Atari 2600 — игровая приставка, разработанная и выпускавшаяся американской компанией Atari. Была выпущена в США 14 октября 1977 года и стала наиболее популярной игровой приставкой конца 1970-х — начала 1980-х. Она стала первой успешной приставкой с играми на картриджах. В 1980-х в США слово «Atari» воспринималось как синоним «Atari 2600».',
          category:'70s',
          price:'600'
        },
    
        {
          id: 7,
          title: 'Neo Geo',
          img: 'neo geo.jpg',
          desc: 'Neo-Geo — игровая система, созданная японской компанией SNK в 1990 году. Это была первая система в семействе Neo Geo. среди игровых платформ четвёртого поколения, которая продавалась как первая 24-битная; несмотря на это ЦП технически базировался на 16/32-битном процессоре Motorola 68000 (12 МГц) (или его клонах) с 8-битным Z80 (4 МГц), а его набор микросхем графического процессора имел 24-битную шину графических данных. Данные характеристики предлагали пользователям довольно качественную 2D-графику и высококачественное звуковое сопровождение. Для создания звуковых эффектов опционально мог использоваться 15-канальный звуковой чип Yamaha YM2610, который использовался как звуковой сопроцессор.',
          category:'90s',
          price:'600'
        },
    
        {
          id: 8,
          title: '3DO Interactive',
          img: '3do interactive.jpg',
          desc: '3DO Interactive Multiplayer (или просто 3DO) — игровая приставка, выпускавшаяся в 1993—1996 годах компаниями Panasonic, Sanyo, Creative и Goldstar. Консоль производилась в соответствии с набором спецификаций, предложенных The 3DO Company, и изначально разработанных Дэйвом Нидлом и Робертом Дж. Микалом из New Technology Group. Идея создания консоли принадлежит предпринимателю Трипу Хоукинсу, который также является основателем EA Games',
          category:'90s',
          price:'400'
        },
    
        {
          id: 9,
          title: 'Game Boy',
          img: 'game boy.jpg',
          desc: 'Game Boy (яп. ゲームボーイ Гэ:му Бо:й) — 8-битная портативная игровая система, разработанная и произведённая компанией Nintendo. Первая портативная система семейства Game Boy была впервые выпущена в Японии 21 апреля 1989 года. В конце того же года система была выпущена в Северной Америке, а в конце 1990 года — в Европе. Она была разработана той же командой, которая разработала серию портативных электронных игр Game & Watch и несколько игр для Nintendo Entertainment System',
          category:'80s',
          price:'450'
        },
    
        {
          id: 10,
          title: 'PSP',
          img: 'psp.jpg',
          desc: 'PlayStation Portable (яп. プレイステーション・ポータブル Пурэйсутэ:сён По:табуру), PSP[4], также известная как PSP FAT; PSP Slim (Slim and Lite); PSP Slim and Lite (Bright); PSP Go; PSP Street — портативная игровая консоль производства Sony Computer Entertainment. PlayStation Portable — четвёртый продукт компании Sony в линейке PlayStation',
          category:'00s',
          price:'2000'
        },
    
        {
          id: 11,
          title: 'Sony Playstation',
          img: 'sony playstation.jpg',
          desc: 'PlayStation (яп. プレイステーション Пурэйсутэ:сён, официальное сокр. PS; известна также как PS1 или по кодовому названию PSX[14]) — игровая приставка пятого поколения, разработанная компанией Sony Computer Entertainment под руководством Кэна Кутараги. Выход приставки состоялся 3 декабря 1994 года в Японии[3], в США приставка появилась 9 сентября 1995 года, а в Европе — 29 сентября 1995 года. Приставка является первой игровой системой в линейке PlayStation. В 2000 году вышла обновлённая версия приставки под названием PSone, которая отличалась от оригинальной PlayStation значительно меньшим размером.',
          category:'90s',
          price:'3000'
        },
    
    
      ]);
    
      const[orders,setOrders]=useState<any[]>([]);
      const [currentItems, setCurrentItems]=useState<any[]>([]);
      const [showFullItem, setShowFullItem]=useState<boolean>(false);
      const [fullItem, setFullItem]=useState<any>({});
    
      useEffect(()=>{
        setCurrentItems(items);
      },[items]);
    
      const deleteOrder=(id:number)=>{
        setOrders(orders.filter((el)=>el.id!==id));
      }
    
      const addToOrder=(item:any)=>{
        if(!orders.some((el)=>el.id===item.id)){
          setOrders([...orders,item]);
        }
      /* добавление отдного и того же товара несколько раз  
      setOrders([...orders,item]); */
      }
    
        const chooseCategory = (category:string)=>{
          if(category==="all"){
            setCurrentItems(items);
          }
            else{
              setCurrentItems(items.filter((el)=>el.category===category));
            }
        }
    
        const onShowItem = (item:any) =>{
          setFullItem(item);
          setShowFullItem(!showFullItem);
          console.log("ok")
        }

        const contexValue={
            items,
            setItems,
            orders,
            setOrders,
            currentItems,
            setCurrentItems,
            showFullItem,
            setShowFullItem,
            fullItem,
            setFullItem,
            deleteOrder,
            addToOrder,
            chooseCategory,
            onShowItem
        };

        return <AppContext.Provider value={contexValue}>{children}</AppContext.Provider>;
}

export default AppProvider;