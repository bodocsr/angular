import { Component } from '@angular/core';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  input: string = '';
  answered: boolean = false;


  onDelete() {
    if (this.input.length > 0) {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }
  onReset(){
    this.input = '';
  }

  pressNum(num: string) {
    if (this.answered === true){
      this.input = num;
      this.answered = false;
    }else{
      this.input = this.input + num
    }
  }

  pressOperator(op: string) {
    this.answered = false;
    if ((this.input === "" || (this.input ==="+" && this.input.length === 1)) && op ==='+') {
      return
    }
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '-' || lastKey === '+') {
      this.input=this.input.replace(lastKey,op);
      return;
    }
    this.input = this.input + op;
  }


  calcAnswer(){
    this.input=eval(this.input);
    this.input=this.input.toString();
    this.answered = true;
  }
}

