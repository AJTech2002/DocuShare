class CompState {
    constructor(sel, col) {
        this.selected = sel;
        this.color = col;
    }

    setCol(col) {
        this.color = col;
    }

    setActive(sel) {
        this.selected = sel;
    }

    getCol() { return this.color };
    getActive() { return this.selected };
}

export default CompState;
