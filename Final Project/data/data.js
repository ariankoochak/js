let MOTHERBOARDS=[
    {
        id : 1,
        en_name:"َAsus MotherBoard PRIME H310M-K",
        fa_name:"مادربرد ایسوس مدل PRIME H310M-K",
        company : "Asus",
        ramSupport:{
            count: 32,
            types : 4,
            Frequency : [2666,2400,2133],
        },
        cpuSocket:"LGA-1151",
        chipset : "H310",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 0,
        MBsataNum: 3,
        price : "1,628,000",
        src:{
            show : "./images/MotherBoard/Asus-H310-Show.png",
            small : "./images/MotherBoard/Asus-H310-Small.png",
        }
    },
    {
        id : 2,
        en_name:"MSI MotherBoard H510 Pro-E",
        fa_name:"مادربرد ام اس آی مدل H510M PRO-E",
        company : "MSI",
        ramSupport:{
            count: 64,
            types : 4,
            Frequency : [3200,2933,2666,2133],
        },
        cpuSocket:"LGA-1200",
        chipset : "H510",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 0,
        MBsataNum: 4,
        price : "2,170,000",
        src:{
            show : "./images/MotherBoard/Msi-H510-Show.png",
            small : "./images/MotherBoard/Msi-H510-Small.png",
        }
    },
    {
        id : 3,
        en_name:"Biostar Motherboard B250MHC",
        fa_name:"مادربرد بایوستار مدل B250MHC",
        company : "Biostar",
        ramSupport:{
            count: 32,
            types : 4,
            Frequency : [2400,2133,1866],
        },
        cpuSocket:"LGA-1151",
        chipset : "B250",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 0,
        MBsataNum: 4,
        price : "2,197,000",
        src:{
            show : "./images/MotherBoard/Biostasr-B250-Show.png",
            small : "./images/MotherBoard/Biostar-B250-Small.png",
        }
    },
    {
        id : 4,
        en_name:"Biostar Motherboard B550T-SILVER Ver 5.0",
        fa_name:"مادربرد بایوستار مدل B550T-SILVER Ver 5.0",
        company : "Biostar",
        ramSupport:{
            count: 32,
            types : 4,
            Frequency : [3200,2933],
        },
        cpuSocket:"AM4",
        chipset : "B550",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 1,
        MBsataNum: 4,
        price : "3,380,000",
        src:{
            show : "./images/MotherBoard/Biostasr-B550-Show.png",
            small : "./images/MotherBoard/Biostar-B550-Small.png",
        }
    },
    {
        id : 5,
        en_name:"Asus Motherboard PRIME B550M-A",
        fa_name:"مادربرد ایسوس مدل PRIME B550M-A",
        company : "Asus",
        ramSupport:{
            count: 128,
            types : 4,
            Frequency : [4600],
        },
        cpuSocket:"AM4",
        chipset : "B550",
        formFactor : "microATX",
        ramSluts : 4,
        m2Sluts: 2,
        MBsataNum: 4,
        price : "3,440,000",
        src:{
            show : "./images/MotherBoard/Asus-B550-Show.png",
            small : "./images/MotherBoard/Asus-B550-Small.png",
        }
    },
]

let CPUS=[
    {
        id : 1,
        en_name : "Intel Core i5 10400f",
        fa_name: "پردازنده ی اینتل مدل core i5 10400f",
        company : "Intel",
        socket : "LGA-1200",
        haveGPU: false,
        benchmark : 12369,
        src:{
            show:"./images/CPU/i5-10400f-Show.png",
            small:"./images/CPU/i5-10400f-Show.png",
        },
        price:"3,778,000",
    },
    {
        id : 2,
        en_name : "Intel Core i3 9100",
        fa_name: "پردازنده ی اینتل مدل core i3 9100",
        company : "Intel",
        socket : "LGA-1151",
        haveGPU: true,
        benchmark : 6663,
        src:{
            show:"./images/CPU/i5-9100-Show.png",
            small:"./images/CPU/i5-9100-Show.png",
        },
        price:"4,478,000",
    },
    {
        id : 3,
        en_name : "Intel Core i5 9400f",
        fa_name: "پردازنده ی اینتل مدل core i5 9400f",
        company : "Intel",
        socket : "LGA-1151",
        haveGPU: false,
        benchmark : 9540,
        src:{
            show:"./images/CPU/i5-9400f-Show.png",
            small:"./images/CPU/i5-9400f-Show.png",
        },
        price:"4,597,000",
    },
    {
        id : 4,
        en_name : "AMD Ryzen5 5600X",
        fa_name: "پردازنده ی ای ام دی مدل Ryzen5 5600X",
        company : "AMD",
        socket : "AM4",
        haveGPU: true,
        benchmark : 21950,
        src:{
            show:"./images/CPU/Ryzen5-5600X-Show.png",
            small:"./images/CPU/Ryzen5-5600X-Show.png",
        },
        price:"7,690,000",
    },
    {
        id : 5,
        en_name : "AMD Ryzen7 Pro 5750G",
        fa_name: "پردازنده ی ای ام دی مدل Ryzen7 5750G",
        company : "AMD",
        socket : "AM4",
        haveGPU: true,
        benchmark : 24637,
        src:{
            show:"./images/CPU/Ryzen7-Pro5750G-Show.png",
            small:"./images/CPU/Ryzen7-Pro750G-Show.png",
        },
        price:"7,780,000",
    },
]

let GPUS=[
    {
        id : 1,
        en_name: "Asus TUF Gaming 1660Ti Evo 6GB GDDR6",
        fa_name : "کارت گرافیک ایسوس مدل TUF Gaming GeForce GTX 1660 Ti EVO 6GB GDDR6",
        company: "Asus",
        chipsetCompany : "nvidia",
        chipset : "GTX1660Ti",
        benchmark : 11886,
        ports : {
            HDMI : 2,
            DP : 1,
            VGA : 0,
            DG : 1,
        },
        src : {
            Show : "./images/GraphicCard/Asus-GTX1660Ti-Show.png",
            Small : "./images/GraphicCard/Asus-GTX1660Ti-Small.png",
        },
        gpuStorage : 6,
        price : "8,500,000",
    },
    {
        id : 2,
        en_name: "Asus TUF-GTX1650-O4GD6-P-GAMING",
        fa_name : "کارت گرافیک ایسوس مدل TUF-GTX1650-O4GD6-P-GAMING",
        company: "Asus",
        chipsetCompany : "nvidia",
        chipset : "GTX1650",
        benchmark : 7828,
        ports : {
            HDMI : 1,
            DP : 1,
            VGA : 0,
            DG : 1,
        },
        src : {
            Show : "./images/GraphicCard/Asus-GTX1660Ti-Show.png",
            Small : "./images/GraphicCard/Asus-GTX1660Ti-Small.png",
        },
        gpuStorage : 4,
        price : "7,100,000",
    },
    {
        id : 3,
        en_name: "َGigaByte GeForce RTX 2060 D6 6G rev. 2.0 GV-N2060D6-6GD",
        fa_name : "کارت گرافیک گیگابایت مدل GeForce RTX 2060 D6 6G rev. 2.0 GV-N2060D6-6GD",
        company: "gigabyte",
        chipsetCompany : "nvidia",
        chipset : "RTX2060",
        benchmark : 14006,
        ports : {
            HDMI : 2,
            DP : 2,
            VGA : 0,
            DG : 0,
        },
        src : {
            Show : "./images/GraphicCard/Gigabyte-RTX2060-Show.png",
            Small : "./images/GraphicCard/Gigabyte-RTX2060-Show.png",
        },
        gpuStorage : 6,
        price : "11,200,000",
    },
]

let RAMS=[
    {
        id : 1,
        en_name : "Crucial Ram",
        fa_name : "رم کروشیال DDR4 16GB",
        company : "Crucial",
        ramFrequency : 2400,
        ramType : 4,
        ramAllStorage : 16,
        ramSluts : 2,
        src : {
            Show : "./images/RAM/Ram-Show.png",
            Small: "./images/RAM/Ram-Small.png",
        },
        price : "2,170,000",   
    },
]

let CASES=[
    {
        id : 1,
        en_name:"Green Griffin G6",
        fa_name:"کیس گرین مدل G6",
        company: "green",
        caseForm : "M",
        caseBiggerFormFactorSupport : "ATX",
        fansNum : 3,
        intelTAC : true,
        src:{
            Show:"./images/Case/Green-G6-Show.jpg",
            Small:"./images/Case/Green-G6-Small.jpg",
        },
        Price : "2,840,000",
    },
    {
        id : 2,
        en_name:"Lian Li O11 Dynamic EVO W",
        fa_name:"کیس لیان لی مدل O11 Dynamic EVO W",
        company: "LianLi",
        caseForm : "H",
        caseBiggerFormFactorSupport : "ATX",
        fansNum : 4,
        intelTAC : true,
        src:{
            Show:"./images/Case/LianLi-Show.jpg",
            Small:"./images/Case/LianLi-Small.jpg",
        },
        Price : "6,570,000",
    },
    {
        id : 3,
        en_name:"Cooler Master MASTERBOX Q500L",
        fa_name:"کیس کامپیوتر کولر مستر مدل MASTERBOX Q500L",
        company: "CoolerMaster",
        caseForm : "M",
        caseBiggerFormFactorSupport : "ATX",
        fansNum : 0,
        intelTAC : false,
        src:{
            Show:"./images/Case/CoolerMaster/Show",
            Small:"./images/Case/CoolerMaster/Small",
        },
        Price : "2,240,000",
    },
]

let POWERS=[
    {
        en_name:"",
        fa_name:"",
        company : "Green",
        watt : 580,
        module : "N",
        Form : "normal",
        powerSataConnectorNum : 4,
        price : "",
    },
]

let SSDS=[
    {
        en_name : "",
        fa_name : "",
        company : "Samsung",
        storage : 1000,
        ssdType: "SATA",
    },
]

let HDDS=[
    {
        en_name:"",
        fa_name:"",
        company:"WD",
        storage:1000,
        hddForm : 3.5,
    },
]