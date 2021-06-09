import { HttpHeaders } from '@angular/common/http';

export const customEnvironment = {
    BASE_URL: 'https://altiustechnology.com/api/v1',
  //  BASE_URL: 'http://192.168.1.106:8080/api/v1',
  // BASE_URL: "https://admin.ppc-drc.com/api/v1",
//BASE_URL: 'http://192.168.43.62:8080/api/v1',
  // BASE_URL: "http://localhost:4200/api",
  headers: new HttpHeaders()
};
