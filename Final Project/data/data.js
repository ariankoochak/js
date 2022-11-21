let MOTHERBOARDS=[
    {
        en_name:"َAsus MotherBoard PRIME H310M-K",
        fa_name:"مادربرد ایسوس مدل PRIME H310M-K",
        company : "Asus",
        ramSupport:{
            count: 32,
            types : [4],
            Frequency : [2400,2666,2133],
        },
        cpuSocket:"LGA-1151",
        chipset : "H310",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 0,
        MBsataNum: 3,
        price : "1,628,000",
        src:{
            show : "./images/MotherBoard/Asus-H310-show.png",
            small : "./images/MotherBoard/Asus-H310-show.png",
        }
    },
    {
        en_name:"MSI MotherBoard H510 Pro-E",
        fa_name:"مادربرد ام اس آی مدل H510M PRO-E",
        company : "Asus",
        ramSupport:{
            count: 32,
            types : [4],
            Frequency : [2400,2666,2133],
        },
        cpuSocket:"LGA-1151",
        chipset : "H310",
        formFactor : "microATX",
        ramSluts : 2,
        m2Sluts: 0,
        MBsataNum: 3,
        price : "1,628,000",
        src:{
            show : "./images/MotherBoard/Asus-H310-show.png",
            small : "./images/MotherBoard/Asus-H310-show.png",
        }
    },
]

let CPUS=[
    {
        en_name : "",
        fa_name: "",
        company : "Intel",
        socket : "LGA-1200",
        haveGPU: true,
        benchmark : 10342,
    },
]

let GPUS=[
    {
        en_name: "",
        fa_name : "",
        company: "Asus",
        chipsetCompany : "nvidia",
        chipset : "GTX1650Super",
        benchmark : 13753,
        ports : {
            HDMI : 2,
            DP : 2,
            VGA : 0,
            DG : 0,
        },
        gpuSize : 32,
        gpuStorage : 2,
    },
]

let RAMS=[
    {
        en_name : "",
        fa_name : "",
        company : "Geil",
        ramFrequency : 2400,
        ramType : 4,
        ramAllStorage : 16,
        ramSluts : 2,   
    },
]

let CASES=[
    {
        en_name:"",
        fa_name:"",
        company: "green",
        caseForm : "M",
        caseBiggerFormFactorSupport : "ATX",
        fansNum : 2,
        intelTAC : true,
        caseMaxGpuSize : 50,
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
        hddType: "Blue",
        hddForm : 3.5,
    },
]