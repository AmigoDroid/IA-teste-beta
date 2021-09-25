 function sigmoide(x){
    return 1/(1 + Math.exp(-x));
}
class RedeNeural{
    constructor(i_nodes,h_nodes, o_nodes){
        this.i_nodes=i_nodes;
        this.h_nodes=h_nodes;
        this.o_nodes=o_nodes;

        this.bias_ih = new Matrix(this.h_nodes,1);
        this.bias_ih.rondomizi();
        this.bias_oh = new Matrix(this.o_nodes,1);
        this.bias_oh.rondomizi();

        this.bias_ih.print();
        // this.bias_oh.print();

        this.peso_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.peso_ih.rondomizi();

        this.peso_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.peso_ho.rondomizi();

        //this.peso_i.print();
        // this.peso_o.print();

    }
    fidfoewr(Input){
        let input = Matrix.arrayparamatrix(Input);

        let oculta = Matrix.mutiply(this.peso_ih,input).data;
        oculta = Matrix.add(oculta,this.bias_ih);
       // console.log(oculta);
        oculta = Matrix.map(sigmoide)
        oculta.print();
    }
}