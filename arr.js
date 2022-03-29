let unsortedArr =[10,5,9,7,8,7,7];

let swapped;

function bubbleSort(arr){
    swapped = false;
    let end = arr.length-1;
    for( let i=0 ; i< end ; i++){
        if(arr[i] > arr[i+1]){
            swapped=true;
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= temp;
        }
     }
    end--;
    }
     do{
       bubbleSort(unsortedArr);
    } while(swapped);
     console.log(unsortedArr);