(function($){
    let ROOT={
        nowInput : "",
        start: function(cnfg){
            this.config = cnfg;
            this.buttonEvents();
            this.addSubmit();
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

        sendData : function(url){
            const that = this;
            $.post(url,function(res){
                that.getData(that.config.nowInput,(res,state)=>{that.renderData(res,state)});
            })
        },

        deleteData : function(url){
            const that = this;
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function () {
                    that.getData(that.config.nowInput, (res, state) => { that.renderData(res, state) });
                }
            });
        },

        editData:function(url){
            const that = this;
            $.ajax({
                url: url,
                type: 'PUT',
                success: function () {
                    that.getData(that.config.nowInput, (res, state) => { that.renderData(res, state) });
                }
            });
        },

        renderData:function(datas,state){
            this.config.nowInput = state;
            const that = this;
            let template = datas.map(data=>{
                return that.prepareTemplate(state,data);
            }).join("");
            $(this.config.root).html(template);
            this.deleteSumbit();
            this.editSubmit();
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
                        <td aria-label="fa_name">${data.fa_name}</td>
                        <td aria-label="en_name">${data.en_name}</td>
                        <td aria-label="company">${data.company}</td>
                        <td aria-label="cpu_socket">${data.cpu_socket}</td>
                        <td aria-label="benchmark">${data.benchmark}</td>
                        <td aria-label="haveGPU">${data.haveGPU}</td>
                        <td aria-label="showIMG">${data.showIMG}</td>
                        <td aria-label="smallIMG">${data.smallIMG}</td>
                        <td aria-label="price">${data.price}</td>
                        <td>
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button why="delete" class="btn btn-danger btn-sm">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                            <button why="edit" class="btn btn-info btn-sm" >Edit</button>
                            <button class="btn btn-danger btn-sm" why="delete">Delete</button>
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
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get"" class="form-control" placeholder="socket" aria-label="cpu_socket">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="is have GPU(0 or 1)" aria-label="haveGPU">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="benchmark" aria-label="benchmark">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="show image" aria-label="showIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "motherBoard":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ram support count" aria-label="ramSupportCount">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ramtypes" aria-label="ramTypes">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ramFrequency" aria-label="ramFrequency">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="cpu socket" aria-label="cpuSocket">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="chipset" aria-label="chipset">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="from factor" aria-label="formFactor">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ram slut num" aria-label="ramSluts">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="m2 slut num" aria-label="m2Sluts">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="motherboard sata port num" aria-label="MBsataNum">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="show image" aria-label="showIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "gpu":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="chipsetCompany" aria-label="chipsetcompany">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="chipset" aria-label="chipset">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="benchmark" aria-label="benchmark">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="HDMI port num" aria-label="HDMIport">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="VGA port num" aria-label="VGAport">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="DP port num" aria-label="DPport">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="DG port num" aria-label="DGport">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="gpu storage" aria-label="gpuStorage">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="show image" aria-label="showIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "case":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="case form" aria-label="caseForm">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="case max form factor" aria-label="caseBiggerFormFactorSupport">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="fansnum" aria-label="fansNum">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="have intelTAC(1 or 0)" aria-label="intelTAC">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="show image" aria-label="showIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "ram":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ram frequency" aria-label="ramFrenquency">
                            </div>
                            <div class="col-6 my-2">
                                <input type="mumber" input="get" class="form-control" placeholder="ram type" aria-label="ramType">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ram all storage" aria-label="ramAllStorage">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ram sluts num" aria-label="ramSluts">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="show image" aria-label="showIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "ssd":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ssd storage" aria-label="ssdStorage">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="ssd type" aria-label="ssdType">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "hdd":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="hdd storage" aria-label="hddStorage">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="hdd type" aria-label="hddType">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="hdd form" aria-label="hddForm">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                case "power":
                    $(this.config.modalBody).html(`
                        <div class="row">
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="Farsi Name" aria-label="fa_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="English Name" aria-label="en_name">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="company" aria-label="company">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="watt" aria-label="watt">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="module" aria-label="module">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="form" aria-label="form">
                            </div>
                            <div class="col-6 my-2">
                                <input type="number" input="get" class="form-control" placeholder="sata connector num" aria-label="powerSataConnectorNum">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="small image" aria-label="smallIMG">
                            </div>
                            <div class="col-6 my-2">
                                <input type="text" input="get" class="form-control" placeholder="price" aria-label="price">
                            </div>
                        </div>
                    `);
                    break;
                }
        },

        addSubmit : function(){
            $(this.config.sumbitAddButton).on("click",()=>(this.prepareUrl()));
        },

        deleteSumbit : function(){
            const that = this;
            $('[why=delete]').on('click',function(){
                let id = $(this).parent().parent().children().html();
                that.deleteData(`http://localhost:3000/${that.config.nowInput}/${id}`);
            })
        },

        editSubmit:function(){
            const that = this;
            $('[why=edit]').on('click',function(){
                that.prepareModalForEdit($(this).parent().parent().children())
            })
        },

        prepareModalForEdit:function(data){
            let id = 0;
            data.each(function(index,td){
                if ($(td).attr('aria-label')){
                    $(`input[aria-label=${$(td).attr('aria-label')}]`).val($(td).html());
                }
            })
            $(this.config.sumbitAddButton).html("Edit");
            $(this.config.sumbitAddButton).attr("why","edit");
            $(this.config.modalTitle).html("Edit data");
            $(this.config.addButton).click();
            this.submiteditData(data.parent().children().html());
        },

        submiteditData:function(id){
            const that = this;
            $("[why=edit]").on('click',function(){
                let url = `http://localhost:3000/${that.config.nowInput}/?`;
                let inputs = $('[input=get]');
                url += `id=${id}&`;
                inputs.each((index, input) => {
                    url += `${$(input).attr('aria-label')}=${input.value}&`;
                });
                that.editData(url);
                that.addDataClickEvent();
                $('#close-modal').click();
            })
        },

        addDataClickEvent : function(){
            const that = this;
            $(this.config.addButton).on('click',function(){
                $('input').each(function(index,input){
                    $(input).val("");
                });
                $(that.config.sumbitAddButton).html("Add");
                $(that.config.sumbitAddButton).attr("why", "submit");
                $(that.config.modalTitle).html("Add data");
            })
        },

        prepareUrl : function(){
            if($(this.config.submitButtons).attr('why') === 'submit'){
                let url = `http://localhost:3000/${this.config.nowInput}/?`;
                let inputs = $('[input=get]');
                inputs.each((index, input) => {
                    url += `${$(input).attr('aria-label')}=${input.value}&`;
                });
                $('#close-modal').click();
                this.sendData(url);
            }
        },


        
    }

    ROOT.start({
        buttons : $('[why=state]'),
        inputs: $('input'),
        submitButtons : $('[why=submit]'),
        root: $('#root'),
        addButton : $('[why=addData]'),
        sumbitAddButton: $('[why=submit]'),
        modalBody : $('.modal-body'),
        listTitle: $('thead'),
        modalTitle : $('h1'),
        nowInput : '',
    })

})(jQuery);