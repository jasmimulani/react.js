class count{
    constructor(){
        this.textarea = document.querySelector(".count-textarea")
        this.wordcount = document.querySelectorAll(".word-count")
        this.charcount = document.querySelectorAll(".character-count")
        window.addEventListener("load",this.updatecount.bind(this))
        this.textarea.addEventListener("input",this.updatecount.bind(this))
    }

        countwords(){
            let value = this.textarea.value.trim()
            if(!value) return 0
            return value.split(/\s+/).length

        }

         countchars(){
            return this.textarea.values.length
         }

         updatecount(){
            let numwords = this.wordcount()
            let numchars = this.charcount()

            this.wordcount.forEach((wordcount) => {
                wordcount.textcontent = numwords.tostring(10)
                
            })
            this.charcount.forEach((charcount) => {

                charcount.textcontent = numchars.toString(10)
         })
}
}
new count()


