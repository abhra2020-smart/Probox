         //function that displays value
         function dis(val)
         {
             document.getElementById("result").value+=val
         }

         //function that evaluates the digit and returns result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }

         //function that clears the display
         function clr()
         {
             document.getElementById("result").value = ""
         }