class RedeNeural{
    constructor(i_nodes,h_nodes, o_nodes){
        this.i_nodes=i_nodes;
        this.h_nodes=h_nodes;
        this.o_nodes=o_nodes;

        this.bias_ih = new Matrix(h_nodes,1);
        this.bias_ih.rondomizi();
        this.bias_oh = new Matrix(o_nodes,1);
        this.bias_oh.rondomizi();

        // this.bias_ih.print();
        // this.bias_oh.print();

        this.peso_i = new Matrix(this.h_nodes, this.i_nodes);
        this.peso_i.rondomizi();

        this.peso_o = new Matrix(this.o_nodes, this.h_nodes);
        this.peso_o.rondomizi();

        // this.peso_i.print();
        // this.peso_o.print();

    }
    fidfoewr(ent){
        let input = Matrix.arrayparamatrix(ent);
        let oculta = Matrix.mutiply(this.peso_i,input);

        oculta.print();

    }
}