

//MObile
const mFeatured = {title:'Featured',items:['Samsung S22 Ultra','Galaxy S22|S22+','Galaxy A53 5G','Galaxy Z Fold3 5G','Galaxy Watch4']}
const Smartphones= { title:'Smartphones',items:['Galaxy S','Galaxy Z','Galaxy Note','Galaxy A','Galaxy M']}
const Tablets = { title:'Tablets',items:['Galaxy Tab S7','Galaxy Tab A','Accessories']}
const Watches = { title:'Watches',items:['Galaxy Watch','Accessories']}
const Buds = {title:'Galaxy Buds',items:['Galaxy Buds','AKG Headphones']};

//TV and Av
const tFeatured={title:'Featured',items:['Neo QLED 8K','Neo QLED 4K','QLED 4K','The Frame','The Seriff']}
const TVs = {title:'TVs',items:['QLED','Crystal UHD','8K TVs','4K TVs','Full HD/HD TVs']}
const lifestyleTVs = {title:'Lifestyle TVs', items:['Overview','The Frame','The Sero','The Serif','The Premiere']}
const TVsBySize = {title:'TVs by Size',items:['55-and-above','48-54','40-47','32-39','See All']}
const SoundDevices = {title:'Sound Devices',items:['Overview','Soundbar','Sound Tower','Home Entertainment System','See All Devices']}


//Home Appliances
const hFeatured =  {title:'Featured',items:['WindFree AC','Ecobubble Washer and Dryer','Curd Maestro Cool Refrigerators','Digi-ATouch Cool 5in1 Refrigerators','IntensiveWash Dishwasher']}
const Refrigerators = {title:'Refrigerators',items:['BESPOKE Refrigerators','French Door','Side By Side','Double Door','Single Door']}
const WashingMachine = {title:'Washing Machine',items:['Washer Dryer','Dryers','Front Load','Top Load','Semi Automatic']}
const AirConditioner = {title:'Air Conditioner',items:['Split AC','See All ACs']}
const DishWashers = {title:'Dish Washers',items:['Free Standing Dishwashers','See All Dishwashers']}

//Laptops and Monitors
const lFeatured = {title:'Featured',items:["Galaxy Book2 Pro 360",'Galaxy Book2 Pro','Galaxy Book Go','Smart Monitors','Ultra Wide Curved Monitor','Gaming Laptop']}
const  GalaxyBook = {title:'Galaxy Book',items:['Galaxy Book2 Pro','Galaxy Book2 360','Galaxy Book Go']}
const Monitors = {title:'Monitors',items:['Lenovo G-series','LG UltraGear','Acer Nitro']}
const MemoryandStorage = {title:'Memory & Storage',items:['SSD','HDD','Pendrive']}




const navdata = {
    'Mobile':{'title':'Mobiles',categories:[mFeatured,Smartphones, Tablets,Watches,Buds]},
    'TV & AV':{title:'TV & AV', categories:[tFeatured, TVs, lifestyleTVs, TVsBySize,SoundDevices]},
    'Home Appliances':{title:'Home Appliances',categories:[hFeatured,Refrigerators,WashingMachine,AirConditioner,DishWashers]},
    'Laptops & Monitors':{title:'Laptops & Monitors', categories:[lFeatured,GalaxyBook,Monitors,MemoryandStorage]},
 
 }
 export default navdata;