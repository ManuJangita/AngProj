import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CompanyService {
    static companyUrl:string = "https://trinitstechnologies.com/demo/api/v1/companies";
constructor(private http:HttpClient) {
}
loadCompanydata(){
   return this.http.get(CompanyService.companyUrl);
}
deleteCompanyData(id){
    //let url =CompanyService.companyUrl+"/"+id;
    let url= CompanyService.companyUrl +`/${id}`;
    return this.http.delete(url);
}
saveCompanyData(company){
    let url = CompanyService.companyUrl;
    return this.http.post(url,company);
}
updateCompanyData(company){
    let url = CompanyService.companyUrl +`/${company.id}`;
    return this.http.put(url,company);
}

}