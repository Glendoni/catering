import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';



import { Page } from '../_models/index';



    export interface DeiInstance { 
    base_url: string;
    date: string;
    lname: string;
    name: string;
    description: string;
    id: number;
    creationDate: string; //probably date
    version: string
    metrics: Metric[];
    key: string;
 }

 export interface Metric {
      val: string;
      frmt_val: string;
      key: string;
 }



@Injectable()
export class PageService {
    constructor(private http: Http) { }

    public getPages() {
        
        //console.log('sdfs');
        return this.http.get('http://core.app/yes', this.jwt()).map((response: Response) => response.json());
    }
    
    
    
    
    
    
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
    
    
 
}