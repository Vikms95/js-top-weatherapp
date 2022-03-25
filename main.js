(()=>{"use strict";const e=async(e,t)=>{const a=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&appid=76d5136cd55d14c88e4d9549d0f550f2`),n=await a.json(),o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n.coord.lat}&lon=${n.coord.lon}&units=${t}&exclude=minutely,alerts&appid=76d5136cd55d14c88e4d9549d0f550f2`);return{dataSet1:n,dataSet2:await o.json()}};async function t(t,a="metric"){try{const n=await async function(t,a){const n=document.querySelector(".loader");try{return n.textContent="Loading ...",n.classList.toggle("visible"),await Promise.race([e(t,a),(o=5e3,new Promise((e=>{setTimeout((()=>{e("Timeout")}),o)})))]).then((e=>(n.classList.toggle("visible"),e)))}catch(e){return n.textContent="City not found!",void setTimeout((()=>{n.classList.toggle("visible"),n.textContent="Loading ..."}),2e3)}var o}(t,a);if(!n)return;const o=n.dataSet1.name,c=n.dataSet1.sys.country;let r=new Date((new Date).toLocaleString("en-US",{timeZone:n.timezone}));const i=Math.floor(n.dataSet1.main.temp),d=n.dataSet1.weather[0].main,l=n.dataSet1.weather[0].icon,u=n.dataSet1.weather[0].description,s=Math.floor(n.dataSet1.main.feels_like),m=n.dataSet1.main.humidity,y=Math.floor(n.dataSet1.wind.speed);let h=[];for(let e=1;e<8;e++){const t=n.dataSet2.daily[e],a={temperatureMax:t.temp.max,temperatureMin:t.temp.min,weather:t.weather[0].main,icon:t.weather[0].icon};h.push(a)}return{cityName:o,countryName:c,time:r,temperature:i,weather:d,weatherDesc:u,icon:l,feelsLike:s,humidity:m,windSpeed:y,scale:a,dailyForecast:h}}catch(e){return}}function a(e){const t=document.querySelector("body"),a=document.querySelector(".weather-info"),o=document.querySelector(".weather-icon"),c=document.querySelector(".city-name"),r=document.querySelector(".date"),i=document.querySelector(".temperature-value"),d=document.querySelector(".temperature-icon"),l=document.querySelector(".feels-like-icon"),u=document.querySelector(".feels-like-value"),s=document.querySelector(".humidity-icon"),m=document.querySelector(".humidity-value"),y=document.querySelector(".wind-speed-icon"),h=document.querySelector(".wind-speed-value"),p=document.querySelector(".change-scale-desc"),S=document.querySelector("input#search"),f=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];console.log(e.icon),a.textContent=e.weather,o.innerHTML=`<img src="../icons/${e.icon}.png"></img>`,c.textContent=e.cityName+", "+e.countryName,i.textContent=e.temperature,d.textContent="metric"===e.scale?"ºC":"ºF",r.textContent=f[e.time.getDay()]+", "+e.time.getDate()+" - "+("0"+e.time.getHours()).slice(-2)+":"+("0"+e.time.getMinutes()).slice(-2),l.classList.add("fa-solid"),l.classList.add("fa-temperature-high"),u.textContent=e.feelsLike+" "+d.textContent,s.classList.add("fa-solid"),s.classList.add("fa-droplet"),m.textContent=e.humidity+" %",y.classList.add("fa-solid"),y.classList.add("fa-wind"),S.value="",t.style.backgroundColor="blue",h.textContent=e.windSpeed+" "+("metric"===e.scale?"meter/sec":"miles/hour"),p.textContent="Change to "+("metric"===e.scale?"imperial":"metric");for(let t=0;t<e.dailyForecast.length;t++){const a=document.querySelector(`.day${t+1}`),o=document.querySelector(`.day${t+1} > .weekday`),c=document.querySelector(`.day${t+1} > .max-temp`),r=document.querySelector(`.day${t+1} > .min-temp`),i=document.querySelector(`.day${t+1} > .weather-day`),l=document.querySelector(`.day${t+1} > .icon`);o.innerHTML=n(e.time.getDay(),t,f),c.textContent=Math.floor(e.dailyForecast[t].temperatureMax)+" "+d.textContent,r.textContent=Math.floor(e.dailyForecast[t].temperatureMin)+" "+d.textContent,i.textContent=e.dailyForecast[t].weather,l.innerHTML=`<img src="../icons/${e.dailyForecast[t].icon}.png"></img>`,a.appendChild(o),a.appendChild(c),a.appendChild(r),a.appendChild(i),a.appendChild(l)}}const n=(e,t,a)=>{let n=e+t;return n>6&&(n-=7),a[n]},o=document.querySelector(".fa-magnifying-glass"),c=document.querySelector("input#search"),r=document.querySelector(".change-scale"),i=document.querySelector(".temperature-icon"),d=document.querySelector(".city-name");!async function(){o.addEventListener("click",(async()=>{try{a(await t(c.value))}catch(e){}})),r.addEventListener("click",(async()=>{if(i&&d)try{const e="ºC"===i.textContent?"imperial":"metric";a(await t(d.textContent,e))}catch(e){}}))}(),async function(){a(await t("Barcelona"))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNDLGNBQWMsZ0JBQ3JDd0YsRUFBb0J6RixTQUFTQyxjQUFjLGlCQUMzQ3VELEVBQWF4RCxTQUFTQyxjQUFjLHFCQUNwQ3lGLEVBQWExRixTQUFTQyxjQUFjLGVBRW5DaEIsaUJBQ0h1RyxFQUFhRyxpQkFBaUIsU0FBUzFHLFVBQ25DLElBRUkrRCxRQUQ2Qm5ELEVBQVltRSxFQUFZVyxRQUV4RCxNQUFNaEUsUUFJWDhFLEVBQWtCRSxpQkFBaUIsU0FBUzFHLFVBQ3hDLEdBQUd1RSxHQUFja0MsRUFDYixJQUNJLE1BQU12RyxFQUFtQyxPQUEzQnFFLEVBQVd0RCxZQUF1QixXQUFhLFNBRTdEOEMsUUFENEJuRCxFQUFZNkYsRUFBV3hGLFlBQWFmLElBRW5FLE1BQU13QixRQ3BCbkJpRixHQUVBLGlCQUVJNUMsUUFEZ0JuRCxFQUFZLGNBRGhDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b3Atd2VhdGhlcmFwcC8uL3NyYy9sb2dpYy9mZXRjaEFQSS5qcyIsIndlYnBhY2s6Ly9qcy10b3Atd2VhdGhlcmFwcC8uL3NyYy9sb2dpYy9wcm9jZXNzRGF0YS5qcyIsIndlYnBhY2s6Ly9qcy10b3Atd2VhdGhlcmFwcC8uL3NyYy92aWV3L3JlbmRlclN0YXRpY0VsZW1lbnRzLmpzIiwid2VicGFjazovL2pzLXRvcC13ZWF0aGVyYXBwLy4vc3JjL2xvZ2ljL2FkZEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL2pzLXRvcC13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSSAoY2l0eSxzY2FsZSl7XHJcbiAgICAvLyBHZXQgbG9hZGVyIGVsZW1lbnQgdG8gdG9vZ2xlIGl0J3MgZGlzcGxheSBwcm9wZXJ0eSB3aGlsZSBhd2FpdGluZyBmZXRjaFxyXG4gICAgY29uc3QgbG9hZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJylcclxuICAgIHRyeXtcclxuICAgICAgICAvLyBEaXNwbGF5IHRoZSBsb2FkZXIgZGl2IHdoaWxlIHRoZSBkYXRhIGlzIGZldGNoaW5nXHJcbiAgICAgICAgbG9hZGVyRWwudGV4dENvbnRlbnQgPSAnTG9hZGluZyAuLi4nXHJcbiAgICAgICAgbG9hZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVHJ5IHRvIGZldGNoIGRhdGEgaW4gbGVzcyB0aGFuIDUgc2Vjb25kc1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcclxuICAgICAgICAgICAgZmV0Y2hXZWF0aGVyQVBJKGNpdHksc2NhbGUpLFxyXG4gICAgICAgICAgICB0aW1lb3V0UHJvbWlzZSg1MDAwKVxyXG4gICAgICAgIF0pLnRoZW4oKHdlYXRoZXJEYXRhKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgcmVzb2x2ZSwgdG9vZ2xlIGRpc3BsYXkgdG8gbm90IHNob3dcclxuICAgICAgICAgICAgbG9hZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXHJcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcblxyXG4gICAgICAgIC8vIElmIHJlamVjdGVkLCBzaG93IGVycm9yIG1lc3NhZ2UgZm9yIDJcclxuICAgICAgICAvLyBzZWNvbmRzIGFuZCB0b29nbGUgZGlzcGxheSB0byBub3cgc2hvd1xyXG4gICAgICAgIGxvYWRlckVsLnRleHRDb250ZW50ID0gJ0NpdHkgbm90IGZvdW5kISdcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBsb2FkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxuICAgICAgICAgICAgbG9hZGVyRWwudGV4dENvbnRlbnQgPSAnTG9hZGluZyAuLi4nXHJcbiAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHRpbWVvdXRQcm9taXNlID0gKGRlbGF5KSA9PntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVqZWN0KSA9PntcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICByZWplY3QoJ1RpbWVvdXQnKVxyXG4gICAgICAgIH0sIGRlbGF5KVxyXG4gICAgfSlcclxufVxyXG4gICAgXHJcbmNvbnN0IGZldGNoV2VhdGhlckFQSSA9IGFzeW5jIChjaXR5LHNjYWxlKSA9PntcclxuICAgIGNvbnN0IHJlc3BvbnNlMSA9IFxyXG4gICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHtzY2FsZX0mYXBwaWQ9NzZkNTEzNmNkNTVkMTRjODhlNGQ5NTQ5ZDBmNTUwZjJgKVxyXG4gICAgY29uc3QgZGF0YVNldDEgPSBhd2FpdCByZXNwb25zZTEuanNvbigpXHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9ICBcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2RhdGFTZXQxLmNvb3JkLmxhdH0mbG9uPSR7ZGF0YVNldDEuY29vcmQubG9ufSZ1bml0cz0ke3NjYWxlfSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD03NmQ1MTM2Y2Q1NWQxNGM4OGU0ZDk1NDlkMGY1NTBmMmApXHJcbiAgICBjb25zdCBkYXRhU2V0MiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKClcclxuXHJcbiAgICByZXR1cm4ge2RhdGFTZXQxLGRhdGFTZXQyfSBcclxufVxyXG4gICAgIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuL2ZldGNoQVBJJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGNpdHksc2NhbGUgPSAnbWV0cmljJyl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaEFQSShjaXR5LCBzY2FsZSlcclxuICAgICAgICBpZighd2VhdGhlckRhdGEpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEuZGF0YVNldDEubmFtZVxyXG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gd2VhdGhlckRhdGEuZGF0YVNldDEuc3lzLmNvdW50cnlcclxuICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3RpbWVab25lOiB3ZWF0aGVyRGF0YS50aW1lem9uZX0pKVxyXG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gTWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5kYXRhU2V0MS5tYWluLnRlbXApXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IHdlYXRoZXJEYXRhLmRhdGFTZXQxLndlYXRoZXJbMF0ubWFpblxyXG4gICAgICAgIGNvbnN0IGljb24gPSB3ZWF0aGVyRGF0YS5kYXRhU2V0MS53ZWF0aGVyWzBdLmljb25cclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGVzYyA9IHdlYXRoZXJEYXRhLmRhdGFTZXQxLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cclxuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmRhdGFTZXQxLm1haW4uZmVlbHNfbGlrZSlcclxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhLmRhdGFTZXQxLm1haW4uaHVtaWRpdHlcclxuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmRhdGFTZXQxLndpbmQuc3BlZWQpXHJcblxyXG4gICAgICAgIGxldCBkYWlseUZvcmVjYXN0ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4IDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlZWtEYXkgPSB3ZWF0aGVyRGF0YS5kYXRhU2V0Mi5kYWlseVtpXVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZU1heCA6IHdlZWtEYXkudGVtcC5tYXgsXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZU1pbiA6IHdlZWtEYXkudGVtcC5taW4sXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyIDogd2Vla0RheS53ZWF0aGVyWzBdLm1haW4sXHJcbiAgICAgICAgICAgICAgICBpY29uIDogd2Vla0RheS53ZWF0aGVyWzBdLmljb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LnB1c2godmFsdWVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgY2l0eU5hbWUsXHJcbiAgICAgICAgICAgIGNvdW50cnlOYW1lLFxyXG4gICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZSxcclxuICAgICAgICAgICAgd2VhdGhlcixcclxuICAgICAgICAgICAgd2VhdGhlckRlc2MsXHJcbiAgICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICAgIGZlZWxzTGlrZSxcclxuICAgICAgICAgICAgaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmRTcGVlZCxcclxuICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3RcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLy8gaW1wb3J0IGljb24xZCBmcm9tICcvaWNvbnMvMDFkLnBuZydcclxuLy8gaW1wb3J0IGljb24xbiBmcm9tICcvaWNvbnMvMDFuLnBuZydcclxuLy8gaW1wb3J0IGljb24yZCBmcm9tICcvaWNvbnMvMDJkLnBuZydcclxuLy8gaW1wb3J0IGljb24ybiBmcm9tICcvaWNvbnMvMDJuLnBuZydcclxuLy8gaW1wb3J0IGljb24zZCBmcm9tICcvaWNvbnMvMDNkLnBuZydcclxuLy8gaW1wb3J0IGljb24zbiBmcm9tICcvaWNvbnMvMDNuLnBuZydcclxuLy8gaW1wb3J0IGljb240ZCBmcm9tICcvaWNvbnMvMDRkLnBuZydcclxuLy8gaW1wb3J0IGljb240biBmcm9tICcvaWNvbnMvMDRuLnBuZydcclxuLy8gaW1wb3J0IGljb245ZCBmcm9tICcvaWNvbnMvMDlkLnBuZydcclxuLy8gaW1wb3J0IGljb245biBmcm9tICcvaWNvbnMvMDluLnBuZydcclxuLy8gaW1wb3J0IGljb24xMGQgZnJvbSAnL2ljb25zLzEwZC5wbmcnXHJcbi8vIGltcG9ydCBpY29uMTBuIGZyb20gJy9pY29ucy8xMG4ucG5nJ1xyXG4vLyBpbXBvcnQgaWNvbjExZCBmcm9tICcvaWNvbnMvMTFkLnBuZydcclxuLy8gaW1wb3J0IGljbzExbiBmcm9tICcvaWNvbnMvMTFuLnBuZydcclxuLy8gaW1wb3J0IGljb24xM2QgZnJvbSAnL2ljb25zLzEzZC5wbmcnXHJcbi8vIGltcG9ydCBpY29uMTNuIGZyb20gJy9pY29ucy8xM24ucG5nJ1xyXG4vLyBpbXBvcnQgaWNvbjUwZCBmcm9tICcvaWNvbnMvNTBkLnBuZydcclxuLy8gaW1wb3J0IGljb241MG4gZnJvbSAnL2ljb25zLzUwbi5wbmcnXHJcbi8vIGltcG9ydCBpY29uVW5rbm93biBmcm9tICcvaWNvbnMvdW5rbm93bi5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RhdGljRWxlbWVudHMoZGF0YVRvRGlzcGxheSl7XHJcbiAgICBjb25zdCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGNvbnN0IHdlYXRoZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm8nKVxyXG4gICAgY29uc3Qgd2VhdGhlckljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKVxyXG4gICAgY29uc3QgY2l0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpXHJcbiAgICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXZhbHVlJylcclxuICAgIGNvbnN0IHRlbXBJY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtaWNvbicpXHJcbiAgICBjb25zdCBmZWVsc0xpa2VJY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZS1pY29uJylcclxuICAgIGNvbnN0IGZlZWxzTGlrZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdmFsdWUnKVxyXG4gICAgY29uc3QgaHVtaWRpdHlJY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktaWNvbicpXHJcbiAgICBjb25zdCBodW1pZGl0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LXZhbHVlJylcclxuICAgIGNvbnN0IHdpbmRTcGVlZEljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkLWljb24nKVxyXG4gICAgY29uc3Qgd2luZFNwZWVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZC12YWx1ZScpXHJcbiAgICBjb25zdCBzY2FsZVRvQ2hhbmdlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXNjYWxlLWRlc2MnKVxyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKVxyXG4gICAgXHJcbiAgICBjb25zdCB3ZWVrRGF5TmFtZXMgPSBbXHJcbiAgICAgICAgJ01vbmRheScsIFxyXG4gICAgICAgICdUdWVzZGF5JyxcclxuICAgICAgICAnV2VkbmVzZGF5JyxcclxuICAgICAgICAnVGh1cnNkYXknLFxyXG4gICAgICAgICdGcmlkYXknLFxyXG4gICAgICAgICdTYXR1cmRheScsXHJcbiAgICAgICAgJ1N1bmRheSdcclxuICAgIF1cclxuICAgIGNvbnNvbGUubG9nKGRhdGFUb0Rpc3BsYXkuaWNvbilcclxuXHJcbiAgICB3ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBkYXRhVG9EaXNwbGF5LndlYXRoZXJcclxuICAgIHdlYXRoZXJJY29uRWwuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi4vaWNvbnMvJHtkYXRhVG9EaXNwbGF5Lmljb259LnBuZ1wiPjwvaW1nPmBcclxuICAgIGNpdHlFbC50ZXh0Q29udGVudCA9IGRhdGFUb0Rpc3BsYXkuY2l0eU5hbWUgKyAnLCAnICsgZGF0YVRvRGlzcGxheS5jb3VudHJ5TmFtZVxyXG4gICAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGRhdGFUb0Rpc3BsYXkudGVtcGVyYXR1cmVcclxuICAgIHRlbXBJY29uRWwudGV4dENvbnRlbnQgPSBkYXRhVG9EaXNwbGF5LnNjYWxlID09PSAnbWV0cmljJyA/ICfCukMnIDogJ8K6RidcclxuICAgIFxyXG4gICAgdGltZUVsLnRleHRDb250ZW50ID0gd2Vla0RheU5hbWVzW2RhdGFUb0Rpc3BsYXkudGltZS5nZXREYXkoKV0gKyAnLCAnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBkYXRhVG9EaXNwbGF5LnRpbWUuZ2V0RGF0ZSgpICsgJyAtICcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICArICgnMCcgKyBkYXRhVG9EaXNwbGF5LnRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyAoJzAnKyBkYXRhVG9EaXNwbGF5LnRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMilcclxuICAgIFxyXG4gICAgZmVlbHNMaWtlSWNvbkVsLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJykgXHJcbiAgICBmZWVsc0xpa2VJY29uRWwuY2xhc3NMaXN0LmFkZCgnZmEtdGVtcGVyYXR1cmUtaGlnaCcpIFxyXG4gICAgZmVlbHNMaWtlRWwudGV4dENvbnRlbnQgPSBkYXRhVG9EaXNwbGF5LmZlZWxzTGlrZSArICcgJyArIHRlbXBJY29uRWwudGV4dENvbnRlbnRcclxuICAgIGh1bWlkaXR5SWNvbkVsLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJykgXHJcbiAgICBodW1pZGl0eUljb25FbC5jbGFzc0xpc3QuYWRkKCdmYS1kcm9wbGV0JykgXHJcbiAgICBodW1pZGl0eUVsLnRleHRDb250ZW50ID0gZGF0YVRvRGlzcGxheS5odW1pZGl0eSArICcgJSdcclxuICAgIHdpbmRTcGVlZEljb25FbC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpIFxyXG4gICAgd2luZFNwZWVkSWNvbkVsLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmQnKSBcclxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJydcclxuICAgIGJvZHlFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSdcclxuXHJcbiAgICB3aW5kU3BlZWRFbC50ZXh0Q29udGVudCA9IGRhdGFUb0Rpc3BsYXkud2luZFNwZWVkICsgJyAnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChkYXRhVG9EaXNwbGF5LnNjYWxlID09PSAnbWV0cmljJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ21ldGVyL3NlYycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdtaWxlcy9ob3VyJylcclxuXHJcbiAgICBzY2FsZVRvQ2hhbmdlRWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIHRvICcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoZGF0YVRvRGlzcGxheS5zY2FsZSA9PT0gJ21ldHJpYycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ltcGVyaWFsJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbWV0cmljJylcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRvRGlzcGxheS5kYWlseUZvcmVjYXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRheSR7aSArIDF9YClcclxuICAgICAgICBjb25zdCB3ZWVrRGF5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5JHtpICsgMX0gPiAud2Vla2RheWApXHJcbiAgICAgICAgY29uc3QgbWF4VGVtcEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRheSR7aSArIDF9ID4gLm1heC10ZW1wYClcclxuICAgICAgICBjb25zdCBtaW5UZW1wRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGF5JHtpICsgMX0gPiAubWluLXRlbXBgKVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXkke2kgKyAxfSA+IC53ZWF0aGVyLWRheWApXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kYXkke2kgKyAxfSA+IC5pY29uYClcclxuICAgICAgXHJcbiAgICAgICAgd2Vla0RheUVsLmlubmVySFRNTCA9IGdldFdlZWtkYXlOYW1lKGRhdGFUb0Rpc3BsYXkudGltZS5nZXREYXkoKSwgaSwgd2Vla0RheU5hbWVzKVxyXG4gICAgICAgIG1heFRlbXBFbC50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IoZGF0YVRvRGlzcGxheS5kYWlseUZvcmVjYXN0W2ldLnRlbXBlcmF0dXJlTWF4KSArICcgJyArIHRlbXBJY29uRWwudGV4dENvbnRlbnRcclxuICAgICAgICBtaW5UZW1wRWwudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKGRhdGFUb0Rpc3BsYXkuZGFpbHlGb3JlY2FzdFtpXS50ZW1wZXJhdHVyZU1pbikgKyAnICcrIHRlbXBJY29uRWwudGV4dENvbnRlbnRcclxuICAgICAgICB3ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBkYXRhVG9EaXNwbGF5LmRhaWx5Rm9yZWNhc3RbaV0ud2VhdGhlclxyXG4gICAgICAgIHdlYXRoZXJJY29uRWwuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi4vaWNvbnMvJHtkYXRhVG9EaXNwbGF5LmRhaWx5Rm9yZWNhc3RbaV0uaWNvbn0ucG5nXCI+PC9pbWc+YFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh3ZWVrRGF5RWwpXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1heFRlbXBFbClcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobWluVGVtcEVsKVxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyRWwpXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uRWwpIFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRXZWVrZGF5TmFtZSA9IChjdXJyZW50RGF5LGRheXNGcm9tVG9kYXksIHdlZWtEYXlOYW1lcykgPT57XHJcbiAgXHJcbiAgICAvLyBXZSBzdWJzdHJhY3QgNyBmcm9tIHRoZSBkYXlUb1NlbGVjdCB2YWx1ZSBpbiBjYXNlIHRoZSBudW1iZXJcclxuICAgIC8vIHN1cnBhc3NlcyAnU3VuZGF5Jywgc28gaW4gdGhhdCBjYXNlLFxyXG4gICAgLy8gaXQgY2FuIHN0YXJ0IGNvdW50aW5nIGZyb20gTW9uZGF5XHJcbiAgICBsZXQgZGF5VG9TZWxlY3QgPSBjdXJyZW50RGF5ICsgZGF5c0Zyb21Ub2RheVxyXG4gICAgaWYoZGF5VG9TZWxlY3QgPiA2KXtcclxuICAgICAgICBkYXlUb1NlbGVjdCAtPSA3XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2Vla0RheU5hbWVzW2RheVRvU2VsZWN0XVxyXG59XHJcblxyXG4vLyBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKHdlYXRoZXIsaG91cikgPT57XHJcbi8vIC8vIENoYW5nZSBiYWNrZ3JvdW5kIGJhc2VkIG9uIHdlYXRoZXIgYW5kIGhvdXIgdmFsdWVzXHJcbi8vIC8vIGFuZCBjaGFuZ2UgZm9udCBjb2xvciBpZiBuZWVkZWRcclxuLy8gICAgIGlmKGhvdXIgPj0gNiAmJiBob3VyIDw9IDIwKXtcclxuLy8gICAgICAgICBjb25zdCBiYWNrZ3JvdW5kc0RheSA9IHtcclxuLy8gICAgICAgICAgICAgJ1RodW5kZXJzdG9ybSc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnRHJpenpsZSc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnUmFpbic6ICcnLFxyXG4vLyAgICAgICAgICAgICAnU25vdycgOiAnJywgXHJcbi8vICAgICAgICAgICAgICdDbGVhcic6ICcvaW1hZ2VzL2RheS1jbGVhci5qcGcnLFxyXG4vLyAgICAgICAgICAgICAnQ2xvdWRzJzonJyxcclxuLy8gICAgICAgICAgICAgLy8gXHJcbi8vICAgICAgICAgICAgICdNaXN0JzogJycsXHJcbi8vICAgICAgICAgICAgICdTbW9rZSc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnSGF6ZSc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnRHVzdCc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnRm9nJzogJycsXHJcbi8vICAgICAgICAgICAgICdTYW5kJzogJycsXHJcbi8vICAgICAgICAgICAgICdEdXN0JzogJycsXHJcbi8vICAgICAgICAgICAgICdBc2gnOiAnJyxcclxuLy8gICAgICAgICAgICAgJ1NxdWFsbCc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnVG9ybmFkbyc6ICcnLFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gYmFja2dyb3VuZHNEYXkud2VhdGhlclxyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZXtcclxuLy8gICAgICAgICBjb25zdCBiYWNrZ3JvdW5kc05pZ2h0ID0ge1xyXG4vLyAgICAgICAgICAgICAnVGh1bmRlcnN0b3JtJzogJycsXHJcbi8vICAgICAgICAgICAgICdEcml6emxlJzogJycsXHJcbi8vICAgICAgICAgICAgICdSYWluJzogJycsXHJcbi8vICAgICAgICAgICAgICdTbm93JyA6ICcnLCBcclxuLy8gICAgICAgICAgICAgJ0NsZWFyJzogJycsXHJcbi8vICAgICAgICAgICAgICdDbG91ZHMnOicnLFxyXG4vLyAgICAgICAgICAgICAvLyBcclxuLy8gICAgICAgICAgICAgJ01pc3QnOiAnJyxcclxuLy8gICAgICAgICAgICAgJ1Ntb2tlJzogJycsXHJcbi8vICAgICAgICAgICAgICdIYXplJzogJycsXHJcbi8vICAgICAgICAgICAgICdEdXN0JzogJycsXHJcbi8vICAgICAgICAgICAgICdGb2cnOiAnJyxcclxuLy8gICAgICAgICAgICAgJ1NhbmQnOiAnJyxcclxuLy8gICAgICAgICAgICAgJ0R1c3QnOiAnJyxcclxuLy8gICAgICAgICAgICAgJ0FzaCc6ICcnLFxyXG4vLyAgICAgICAgICAgICAnU3F1YWxsJzogJycsXHJcbi8vICAgICAgICAgICAgICdUb3JuYWRvJzogJycsXHJcblxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gYmFja2dyb3VuZHNOaWdodC53ZWF0aGVyXHJcbi8vICAgICB9XHJcbi8vIH0iLCJpbXBvcnQgeyBwcm9jZXNzRGF0YSB9IGZyb20gJy4vcHJvY2Vzc0RhdGEnXHJcbmltcG9ydCB7IHJlbmRlclN0YXRpY0VsZW1lbnRzIH0gZnJvbSAnLi4vdmlldy9yZW5kZXJTdGF0aWNFbGVtZW50cydcclxuXHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1tYWduaWZ5aW5nLWdsYXNzJylcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKVxyXG5jb25zdCBjaGFuZ2VTY2FsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2Utc2NhbGUnKVxyXG5jb25zdCB0ZW1wSWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLWljb24nKVxyXG5jb25zdCBjaXR5TmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+e1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVRvRGlzcGxheSA9ICBhd2FpdCBwcm9jZXNzRGF0YShzZWFyY2hJbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgcmVuZGVyU3RhdGljRWxlbWVudHMoZGF0YVRvRGlzcGxheSlcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNoYW5nZVNjYWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgaWYodGVtcEljb25FbCAmJiBjaXR5TmFtZUVsKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0ZW1wSWNvbkVsLnRleHRDb250ZW50ID09PSAnwrpDJyA/ICdpbXBlcmlhbCcgOiAnbWV0cmljJ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVRvRGlzcGxheSA9IGF3YWl0IHByb2Nlc3NEYXRhKGNpdHlOYW1lRWwudGV4dENvbnRlbnQsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyU3RhdGljRWxlbWVudHMoZGF0YVRvRGlzcGxheSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7cHJvY2Vzc0RhdGF9IGZyb20gJy4vbG9naWMvcHJvY2Vzc0RhdGEnXHJcbmltcG9ydCB7cmVuZGVyU3RhdGljRWxlbWVudHN9IGZyb20gJy4vdmlldy9yZW5kZXJTdGF0aWNFbGVtZW50cydcclxuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL2xvZ2ljL2FkZEV2ZW50TGlzdGVuZXJzJ1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbihhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYSA9IGF3YWl0IHByb2Nlc3NEYXRhKCdCYXJjZWxvbmEnKVxyXG4gICAgcmVuZGVyU3RhdGljRWxlbWVudHMoYSlcclxufSkoKSJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXJBUEkiLCJhc3luYyIsImNpdHkiLCJzY2FsZSIsInJlc3BvbnNlMSIsImZldGNoIiwiZGF0YVNldDEiLCJqc29uIiwicmVzcG9uc2UyIiwiY29vcmQiLCJsYXQiLCJsb24iLCJkYXRhU2V0MiIsInByb2Nlc3NEYXRhIiwid2VhdGhlckRhdGEiLCJsb2FkZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiUHJvbWlzZSIsInJhY2UiLCJkZWxheSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aGVuIiwiZXJyIiwiZmV0Y2hBUEkiLCJjaXR5TmFtZSIsIm5hbWUiLCJjb3VudHJ5TmFtZSIsInN5cyIsImNvdW50cnkiLCJ0aW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmUiLCJ0aW1lem9uZSIsInRlbXBlcmF0dXJlIiwiTWF0aCIsImZsb29yIiwibWFpbiIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsIndlYXRoZXJEZXNjIiwiZGVzY3JpcHRpb24iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ3aW5kU3BlZWQiLCJ3aW5kIiwic3BlZWQiLCJkYWlseUZvcmVjYXN0IiwiaSIsIndlZWtEYXkiLCJkYWlseSIsInZhbHVlcyIsInRlbXBlcmF0dXJlTWF4IiwibWF4IiwidGVtcGVyYXR1cmVNaW4iLCJtaW4iLCJwdXNoIiwicmVuZGVyU3RhdGljRWxlbWVudHMiLCJkYXRhVG9EaXNwbGF5IiwiYm9keUVsIiwid2VhdGhlckVsIiwid2VhdGhlckljb25FbCIsImNpdHlFbCIsInRpbWVFbCIsInRlbXBlcmF0dXJlRWwiLCJ0ZW1wSWNvbkVsIiwiZmVlbHNMaWtlSWNvbkVsIiwiZmVlbHNMaWtlRWwiLCJodW1pZGl0eUljb25FbCIsImh1bWlkaXR5RWwiLCJ3aW5kU3BlZWRJY29uRWwiLCJ3aW5kU3BlZWRFbCIsInNjYWxlVG9DaGFuZ2VFbCIsInNlYXJjaElucHV0Iiwid2Vla0RheU5hbWVzIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImdldERheSIsImdldERhdGUiLCJnZXRIb3VycyIsInNsaWNlIiwiZ2V0TWludXRlcyIsImFkZCIsInZhbHVlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJkaXYiLCJ3ZWVrRGF5RWwiLCJtYXhUZW1wRWwiLCJtaW5UZW1wRWwiLCJnZXRXZWVrZGF5TmFtZSIsImFwcGVuZENoaWxkIiwiY3VycmVudERheSIsImRheXNGcm9tVG9kYXkiLCJkYXlUb1NlbGVjdCIsInNlYXJjaEJ1dHRvbiIsImNoYW5nZVNjYWxlQnV0dG9uIiwiY2l0eU5hbWVFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=