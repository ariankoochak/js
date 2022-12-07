(function($){
    let ROOT={
        nowInput : "",
        start: function(cnfg){
            this.config = cnfg;
            this.buttonEvents();
        },

        buttonEvents: function(){
            let buttons = this.config.buttons;
            const that = this;
            buttons.each(function(index,button){
                $(button).on('click',function(buttonEvent){
                   $(that.config.addButton).css('display','block'); 
                   that.getData($(buttonEvent.currentTarget).attr('state'),(res,state)=>{that.renderData(res,state)});
                })
            });
        },

        getData : function(state,callback){
            $.get(`http://localhost:3000/${state}`,function(res){
                callback(res,state);
            })
        },

        renderData:function(datas,state){
            const that = this;
            let template = datas.map(data=>{
                return that.prepareTemplate(state,data);
            }).join("");
            $(this.config.root).html(template);
        },
        
        prepareTemplate : function(state,data){
            this.changeModalbody(state);
            switch(state){
                case "cpu":
                    $(this.config.listTitle).html(`
                    <tr id="table-title" title-class = "cpu">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">socket</th>
                        <th scope="col">benchmark</th>
                        <th scope="col">is Have GPU</th>
                        <th scope="col">Show image</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                        return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.cpu_socket}</td>
                        <td>${data.benchmark}</td>
                        <td>${data.haveGPU}</td>
                        <td>${data.showIMG}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "motherBoard":
                    $('thead').html(`
                    <tr id="table-title" title-class="motherboard">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">ram support count</th>
                        <th scope="col">tam type</th>
                        <th scope="col">ram min frequency</th>
                        <th scope="col">ram sluts</th>
                        <th scope="col">cpuSocket</th>
                        <th scope="col">form factor</th>
                        <th scope="col">m2 sluts</th>
                        <th scope="col">sata port num</th>
                        <th scope="col">show image</th>
                        <th scope="col">small image</th>
                        <th scope="col">price</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.ramSupportCount}</td>
                        <td>${data.ramTypes}</td>
                        <td>${data.ramFrequency}</td>
                        <td>${data.ramSluts}</td>
                        <td>${data.cpuSocket}</td>
                        <td>${data.formFactor}</td>
                        <td>${data.m2Sluts}</td>
                        <td>${data.MBsataNum}</td>
                        <td>${data.showIMG}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "gpu":
                    $('thead').html(`
                    <tr id="table-title" title-class = "gpu">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">chipset company</th>
                        <th scope="col">chipset</th>
                        <th scope="col">benchmark</th>
                        <th scope="col">HDMI num</th>
                        <th scope="col">Dp num</th>
                        <th scope="col">VGA num</th>
                        <th scope="col">DG num</th>
                        <th scope="col">gpu storage</th>
                        <th scope="col">Show image</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.chipsetCompany}</td>
                        <td>${data.chipset}</td>
                        <td>${data.benchmark}</td>
                        <td>${data.HDMIport}</td>
                        <td>${data.DPport}</td>
                        <td>${data.VGAport}</td>
                        <td>${data.DGport}</td>
                        <td>${data.gpuStorage}</td>
                        <td>${data.showIMG}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "case":
                    $('thead').html(`
                    <tr id="table-title" title-class = "case">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">case form</th>
                        <th scope="col">max formfactor support</th>
                        <th scope="col">fans num</th>
                        <th scope="col">is have intelTAC</th>
                        <th scope="col">Show image</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.caseForm}</td>
                        <td>${data.caseBiggerFormFactorSupport}</td>
                        <td>${data.fansNum}</td>
                        <td>${data.intelTAC}</td>
                        <td>${data.showIMG}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "ram":
                    $('thead').html(`
                    <tr id="table-title" title-class = "ram">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">ram frequency</th>
                        <th scope="col">ram type</th>
                        <th scope="col">ram all storage</th>
                        <th scope="col">ram sluts num</th>
                        <th scope="col">Show image</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.ramFrequency}</td>
                        <td>${data.ramType}</td>
                        <td>${data.ramAllStorage}</td>
                        <td>${data.ramSluts}</td>
                        <td>${data.showIMG}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "ssd": 
                    $('thead').html(`
                    <tr id="table-title" title-class = "ssd">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">storage</th>
                        <th scope="col">type</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.SSDstorage}</td>
                        <td>${data.ssdType}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "hdd":
                    $('thead').html(`
                    <tr id="table-title" title-class = "hdd">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col" id="course-sort">storage</th>
                        <th scope="col">type</th>
                        <th scope="col">form</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.HDDstorage}</td>
                        <td>${data.hddType}</td>
                        <td>${data.hddForm}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
                case "power":
                    $('thead').html(`
                    <tr id="table-title" title-class = "power">
                        <th scope="col" id="normal-sort">ID</th>
                        <th scope="col" id="name-sort">name-Farsi</th>
                        <th scope="col" id="email-sort">name_english</th>
                        <th scope="col" id="age-sort">company</th>
                        <th scope="col">watt</th>
                        <th scope="col" id="course-sort">module</th>
                        <th scope="col">form</th>
                        <th scope="col">sata connector num</th>
                        <th scope="col">Small image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    `);
                    return `<tr>
                        <td>${data.id}</td>
                        <td>${data.fa_name}</td>
                        <td>${data.en_name}</td>
                        <td>${data.company}</td>
                        <td>${data.watt}</td>
                        <td>${data.module}</td>
                        <td>${data.form}</td>
                        <td>${data.powerSataConnectorNum}</td>
                        <td>${data.smallIMG}</td>
                        <td>${data.price}</td>
                        <td>
                            <button class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
            }
        },
        changeModalbody: function (state) {
            switch(state){
                case "cpu":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="socket" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="is have GPU(0 or 1)" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="benchmark" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="show image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "motherBoard":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ram support count" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ramtypes" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ramFrequency" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="cpu socket" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="chipset" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="from factor" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ram slut num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="m2 slut num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="motherboard sata port num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="show image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "gpu":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="chipsetCompany" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="chipset" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="benchmark" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="HDMI port num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="VGA port num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="DP port num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="DG port num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="gpu storage" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="show image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "case":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="case form" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="case max form factor" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="fansnum" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="have intelTAC(1 or 0)" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="show image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "ram":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ram frequency" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="mumber" id="add-course" class="form-control" placeholder="ram type" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ram all storage" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ram sluts num" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="show image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "ssd":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="ssd storage" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="mumber" id="add-course" class="form-control" placeholder="ssd type" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                case "hdd":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" id="add-name" class="form-control" placeholder="Farsi Name" aria-label="Full Name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-email" class="form-control" placeholder="English Name" aria-label="Email">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-age" class="form-control" placeholder="company" aria-label="Age">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" id="add-course" class="form-control" placeholder="hdd storage" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="mumber" id="add-course" class="form-control" placeholder="hdd type" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="mumber" id="add-course" class="form-control" placeholder="hdd form" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="small image" aria-label="Course">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" id="add-course" class="form-control" placeholder="price" aria-label="Course">
                            </div>
                        </div>
                    `);
                    break;
                }
        },
    }

    ROOT.start({
        buttons : $('[why=state]'),
        inputs: $('input'),
        submitButtons : $('[why=submit]'),
        root: $('#root'),
        addButton : $('[why=addData]'),
        modalBody : $('.modal-body'),
        listTitle: $('thead'),
    })

})(jQuery);