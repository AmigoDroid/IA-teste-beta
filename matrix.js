class Matrix{
    constructor (rows,cols){
        this.rows=rows;
        this.cols=cols;

        this.data = [];

        for(let i=0; i<rows;i++){
            let arr=[];
            for(let j =0;j<cols;j++){
              arr.push(0);
            }
            this.data.push(arr);
        }
    }

    static arrayparamatrix(arr){
        //sei la
        let matrix = new Matrix(arr.length,1);
        matrix.map((elm,i,j)=>{
            return arr[i];
        })
       return matrix;
    }

    print(){
        //printa no console
        console.table(this.data)
    }
    rondomizi(){
        //gera numeros randomicos
        Matrix.map((elm,i,j) =>{
            return Math.random() +2 - 1;
        });
    }
    static map(A,func){
        //retorna uma array
        let matrix = new Matrix(A.rows,B.cols);

        matrix.data = matrix.data.map((arr,i)=>{
          return  arr.map((num,j)=>{
              return func(num,i,j);
            })
           // console.log(arr);

        })
        return matrix;
    }
    map(func){
        //retorna uma array
        this.data = this.data.map((arr,i)=>{
          return  arr.map((num,j)=>{
              return func(num,i,j);
            })
        })
        return this;
    }
   static add(A,B){
       //soma as das matrix
       var matrix = new Matrix(A.rows,A.cols)
       matrix.map((num,i,j) =>{
           return A.data[i][j] + B.data[i][j]
       });
   }
   static mutiply(A,B){
       //multiplica A * B
       var matrix = new Matrix(A.rows, B.cols);
       matrix.map((num,i,j) =>{
           let soma = 0;
           for(let k=0; k < A.cols; k++){
               let ele1 = A.data[i][k];
               let ele2 = B.data[k][j];
               soma += ele1 + ele2

           }
           return soma;
       });
       return matrix;

   }
}