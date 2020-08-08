var express=require('express')
var router=express.Router();
const request = require('request');
    router.get('/',function(req,res){
        let url = "https://terriblytinytales.com/test.txt";
        let options = {text: true};
        request(url, options, (error, res1, text) => 
        {
            if (error) {
                return  console.log(error)
            };
            if (!error && res1.statusCode == 200) {
                text=text.toLowerCase();
                word="";
                let c = new Map()
    
               for(i=0;i<text.length;i++)
               {
                   if((text.charAt(i)>='a' && text.charAt(i)>='z')||
                   (text.charAt(i)>='A' && text.charAt(i)>='Z'))
                   {
                     word=word+text.charAt(i);  
                   }
                   else{
                       if(c.has(word)&&word!="")
                       {
                           x=c.get(word)+1;
                           c.set(word,x);
                           word="";
                       }
                      else if(word!="")
                       {
                        c.set(word,1);
                        word=""
                       }
                   }
               }
         
               var c1 = new Map([...c.entries()].sort((a, b) => b[1] - a[1]));
               let arr=[];
            for(i=0;i<c1.size;i++)
            {
                arr.push({
                "word": Array.from(c1.keys())[i],
                "frequency": c1.get(Array.from(c1.keys())[i])}); 
            }
              
           
               
                res.json(arr);   
            };
        });   
    });
module.exports=router;