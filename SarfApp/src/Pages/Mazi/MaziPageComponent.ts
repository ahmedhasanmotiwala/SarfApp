import { Component } from '@angular/core';
import { ApiCallService } from "../../Services/ApiCall.service";
import { Global } from "../../Services/Global.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'mazipage',
    templateUrl: 'MaziPage.html',
    styleUrls: ['MaziPage.css'],
})

 
export class MaziPageComponent{
    // Urls
    public SegaTypeUrl = "SegaType";
    public SashAqsamUrl = "SashAqsam";
    public HaftAqsamUrl = "HaftAqsam";
    public AbwaabUrl = "Baab";
    public MaziMutlaqMusbatMaroofUrl = "MaziGardans/MaziMutlaqMusbatMaroof";

    // Dropdowns
    public SegaTypes;
    public SashAqsams;
    public HaftAqsams;
    public Abwaab;

    // Grid or Table
    public MaziGardans;

    //Selected Values
    public SelectedSega = [1,2,3,4];
    public SelectedSashAqsam;
    public SelectedHaftAqsam;
    public SelectedBaab = 4;
    

    constructor(public ApiCallService: ApiCallService, public global: Global, private http: HttpClient)
     {
        this.GetSegaTypes();
        this.GetSashAqsams();
        this.GetHaftAqsams();
        this.GetAbwaab();
        this.GetMaziGardans();
    }
    
    

    // Sega Types

    GetSegaTypes() {
        this.ApiCallService.getAll(this.global.BaseURL + this.SegaTypeUrl)
        .then(data=> {
           this.SegaTypes = data;
        });
    }

    // Sash Aqsam
    GetSashAqsams() {
        this.ApiCallService.getAll(this.global.BaseURL + this.SashAqsamUrl)
        .then(data=> {
           this.SashAqsams = data;
        });
    }

    // Haft Aqsam
    GetHaftAqsams() {
        this.ApiCallService.getAll(this.global.BaseURL + this.HaftAqsamUrl)
        .then(data=> {
           this.HaftAqsams = data;
        });
    }

    // Abwaab
    GetAbwaab() {
        this.ApiCallService.getAll(this.global.BaseURL + this.AbwaabUrl)
        .then(data=> {
           this.Abwaab = data;
           this.global.lstAbwab = data;
        });
    }

    // Mazi Gardans
    GetMaziGardans() {
        this.ApiCallService.getAll(this.global.BaseURL + this.MaziMutlaqMusbatMaroofUrl)
        .then(data=> {
            console.log(data);
           this.MaziGardans = data;
           this.MaziData = data;
        });
    }

    MaziData;
    // On Baab Change
    onBaabChange(){
        //this.MaziGardans = this.MaziData;
    }
}