function box(){
    let table =document.querySelector('#chessbox')

    for(let i=0; i<5; i++){
        {
            let row =document.createElement('tr')
            for(let j=0; j<5; j++){
                let col = document.createElement('td')
                row.appendChild(col)
            }
        table.appendChild(row)
       }
   }
}
box()