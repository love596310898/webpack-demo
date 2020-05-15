// import _ from 'lodash'
import {printing} from './print'
import './index.css'
function component() {
    let btn = document.createElement('button')
    btn.innerHTML = `点击这里，然后查看 console!`
    btn.classList.add('hello')
    btn.onclick = printing
    return btn;
  }

document.body.appendChild(component())