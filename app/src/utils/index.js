export const setHJson = (i, method, b) => {
    i = {
        method,
        mode:'cors',
        headers:new Headers({
            "Content-Type":"application/json",
            "Authorization":`JWT ${sessionStorage.getItem('token_bs')}`
        })
    }
    if (b) {
        i.body = JSON.stringify(b)
    }
    return i
};

export const fetchStatus=(response)=>{
  if(!response.ok){
    sessionStorage.setItem('networkError',response.toString())
    // return Promise.reject(new Error(response.statusText))
    new Error(response.statusText)
    return ({error:response.statusText})

    // return response.statusText.json()
  }
  return response.json()
}


export const getErrors =(error)=>{
  console.warn(error)
  return ({error})
}


export const opt_date = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
}

export const gradFillFade =(context,color)=>{
  let grad = context.createLinearGradient(0, 0, 0, 300)
  grad.addColorStop(0, `rgba(${color},.5)`)
  grad.addColorStop(1, `rgba(${color},0)`)
  return grad
}

export const randomFactor=()=>{
  return Math.round((Math.random()*100));
}


export const shorten=(str, maxLen, separator = ' ')=> {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export const formatNmxn =(number)=>{
  return parseFloat(number).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const yearsDate =(d2,d1)=>{
  return Math.floor((d2-d1)/(3.1536*Math.pow(10,10)))
}

export const inputToDate=(date)=>{
  let [year,month,day] = date.split('-')
  return new Date(year,parseInt(month,10)-1,day)
}

// export const formatBreak = (str)=>{
//   let prgh = []
//   return prgh = srt.split('\n')
// }

// export const requestNotif =()=>{
//     if(("Notification" in window)&& window.Notification){
//         window.Notification.requestPermission().then(result=>{
//             if (result==='denied'){
//                 alert('Las notificaciones del sistema son importantes '+
//                 'puede activarlas desde las preferencias del sistema')
//             } else if (result==='granted'){
//             new Notification("Notificaciones activadas",optNotif)
//         }
//     })
//     .catch(e=>console.warn(e))
//     }
// }

export const optDateHour={
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour:'numeric',
  minute:'numeric'

}

export const optDate={
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export const months_es = [
  'Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'
]

export const months_full_es = [
  'Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'
]

export const days_es = [
  'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'
]
export const days_min_es = [
  'Lun','Mar','Mié','Jue','Vie','Sáb','Dom'
]
