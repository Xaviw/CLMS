import { Directive, ElementRef, Input } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[empty]',
})
export class EmptyDirective {
  // 创建空状态节点
  node = document.createElement('div');
  // 空状态提示信息
  @Input() emptyInfo = '';
  // 需要校验的值--变化时触发元素修改
  @Input()
  set emptyData(data: any) {
    if (!this.getBoolean(data) && !this.el.nativeElement.contains(this.node)) {
      this.el.nativeElement.append(this.node);
    } else if (this.getBoolean(data) && this.el.nativeElement.contains(this.node)) {
      this.el.nativeElement.removeChild(this.node);
    }
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.position = 'relative';
    // 设置样式
    this.node.style.cssText =
      'position: absolute;color: rgb(195, 203, 214); top: 0;left: 0;right: 0;bottom: 0;z-index: 99;display: flex;flex-direction: column;justify-content: center;align-items: center;';
    // 设置内容
    this.node.innerHTML = `<svg
    style="width: 50%; max-width: 300px;"
    viewBox="0 0 122 104"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 55 (78076) - https://sketchapp.com -->
    <title>暂无内容</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="空白页" transform="translate(-656.000000, -664.000000)">
        <g id="暂无内容" transform="translate(656.000000, 664.000000)">
          <g id="分组-4">
            <g id="背景/线" fill="#C3CBD6">
              <g id="-">
                <g id="编组" transform="translate(14.200000, 9.200000)" fill-rule="nonzero">
                  <path
                    d="M0.8,73.1 C0.3581722,73.1 -5.68434189e-14,72.7418278 -5.68434189e-14,72.3 C-5.68434189e-14,71.8581722 0.3581722,71.5 0.8,71.5 L70.8,71.5 C71.2418278,71.5 71.6,71.8581722 71.6,72.3 C71.6,72.7418278 71.2418278,73.1 70.8,73.1 L0.8,73.1 Z M74.8,73.1 C74.3581722,73.1 74,72.7418278 74,72.3 C74,71.8581722 74.3581722,71.5 74.8,71.5 L77.3,71.5 C77.7418278,71.5 78.1,71.8581722 78.1,72.3 C78.1,72.7418278 77.7418278,73.1 77.3,73.1 L74.8,73.1 Z M83.8,73.1 C83.3581722,73.1 83,72.7418278 83,72.3 C83,71.8581722 83.3581722,71.5 83.8,71.5 L92.8,71.5 C93.2418278,71.5 93.6,71.8581722 93.6,72.3 C93.6,72.7418278 93.2418278,73.1 92.8,73.1 L83.8,73.1 Z M23.8,80.6 C23.3581722,80.6 23,80.2418278 23,79.8 C23,79.3581722 23.3581722,79 23.8,79 L30.8,79 C31.2418278,79 31.6,79.3581722 31.6,79.8 C31.6,80.2418278 31.2418278,80.6 30.8,80.6 L23.8,80.6 Z M35.3,80.6 C34.8581722,80.6 34.5,80.2418278 34.5,79.8 C34.5,79.3581722 34.8581722,79 35.3,79 L65.8,79 C66.2418278,79 66.6,79.3581722 66.6,79.8 C66.6,80.2418278 66.2418278,80.6 65.8,80.6 L35.3,80.6 Z M80,52.8 C80,51.7333333 81.6,51.7333333 81.6,52.8 L81.6,55.8 C81.6,56.2418278 81.2418278,56.6 80.8,56.6 L77.8,56.6 C76.7333333,56.6 76.7333333,55 77.8,55 L80,55 L80,52.8 Z M81.6,58.8 C81.6,59.8666667 80,59.8666667 80,58.8 L80,55.8 C80,55.3581722 80.3581722,55 80.8,55 L83.8,55 C84.8666667,55 84.8666667,56.6 83.8,56.6 L81.6,56.6 L81.6,58.8 Z M4,28.8 C4,27.7333333 5.6,27.7333333 5.6,28.8 L5.6,31.8 C5.6,32.2418278 5.2418278,32.6 4.8,32.6 L1.8,32.6 C0.733333333,32.6 0.733333333,31 1.8,31 L4,31 L4,28.8 Z M78.1,3.5 L80.8,3.5 C81.8666667,3.5 81.8666667,5.1 80.8,5.1 L78.1,5.1 L78.1,7.8 C78.1,8.86666667 76.5,8.86666667 76.5,7.8 L76.5,5.1 L73.8,5.1 C72.7333333,5.1 72.7333333,3.5 73.8,3.5 L76.5,3.5 L76.5,0.8 C76.5,-0.266666667 78.1,-0.266666667 78.1,0.8 L78.1,3.5 Z M5.6,34.8 C5.6,35.8666667 4,35.8666667 4,34.8 L4,31.8 C4,31.3581722 4.3581722,31 4.8,31 L7.8,31 C8.86666667,31 8.86666667,32.6 7.8,32.6 L5.6,32.6 L5.6,34.8 Z"
                    id="Path-2"
                  ></path>
                  <path
                    d="M14.0928932,61.1431458 C14.5642977,60.6717412 15.2714045,61.378848 14.8,61.8502525 L13.7393398,62.9109127 C13.5440777,63.1061748 13.2274952,63.1061748 13.032233,62.9109127 L11.9715729,61.8502525 C11.5001684,61.378848 12.2072751,60.6717412 12.6786797,61.1431458 L13.3857864,61.8502525 L14.0928932,61.1431458 Z M12.6786797,63.9715729 C12.2072751,64.4429774 11.5001684,63.7358706 11.9715729,63.2644661 L13.032233,62.2038059 C13.2274952,62.0085438 13.5440777,62.0085438 13.7393398,62.2038059 L14.8,63.2644661 C15.2714045,63.7358706 14.5642977,64.4429774 14.0928932,63.9715729 L13.3857864,63.2644661 L12.6786797,63.9715729 Z M22.9213203,8.8 C23.3927249,8.32859548 24.0998316,9.03570226 23.6284271,9.50710678 L22.567767,10.567767 C22.3725048,10.7630291 22.0559223,10.7630291 21.8606602,10.567767 L20.8,9.50710678 C20.3285955,9.03570226 21.0357023,8.32859548 21.5071068,8.8 L22.2142136,9.50710678 L22.9213203,8.8 Z M21.5071068,11.6284271 C21.0357023,12.0998316 20.3285955,11.3927249 20.8,10.9213203 L21.8606602,9.86066017 C22.0559223,9.66539803 22.3725048,9.66539803 22.567767,9.86066017 L23.6284271,10.9213203 C24.0998316,11.3927249 23.3927249,12.0998316 22.9213203,11.6284271 L22.2142136,10.9213203 L21.5071068,11.6284271 Z"
                    id="Path复制"
                  ></path>
                </g>
              </g>
            </g>
            <g id="Group-6" transform="translate(42.000000, 31.000000)">
              <path
                d="M3,4 L35,4 C36.6568542,4 38,5.34314575 38,7 L38,40 C38,41.6568542 36.6568542,43 35,43 L3,43 C1.34314575,43 2.02906125e-16,41.6568542 0,40 L0,7 C-2.02906125e-16,5.34314575 1.34314575,4 3,4 Z"
                id="矩形"
                stroke="#C3CBD6"
                stroke-width="1.6"
                fill="#FFFFFF"
              ></path>
              <path
                d="M15,2 C16.4174805,2 16.8954305,2.02906125e-16 18,0 L20,0 C21.1045695,-2.02906125e-16 21.7387695,2 23,2 C23.8408203,2 24.8408203,2 26,2 C27.1045695,2 28,2.8954305 28,4 L28,5 C28,6.1045695 27.1045695,7 26,7 L12,7 C10.8954305,7 10,6.1045695 10,5 L10,4 C10,2.8954305 10.8954305,2 12,2 C13.055013,2 14.055013,2 15,2 Z"
                id="路径"
                stroke="#C3CBD6"
                stroke-width="1.6"
                fill="#F5F7F9"
              ></path>
              <path
                d="M13.4542125,13.4239785 L13.4542125,18.3586731 L13.4542125,13.4239785 Z M22.5805173,18.7015396 L18.650796,21.8070435 L22.5805173,18.7015396 Z M25.7751015,28.6475524 L20.8480956,27.5374876 L25.7751015,28.6475524 Z"
                id="路径-7"
                stroke="#C3CAD7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="translate(19.000000, 22.000000) rotate(-52.000000) translate(-19.000000, -22.000000) "
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <span> ${this.emptyInfo} </span>
`;
  }

  // 判断真假
  getBoolean(value: any): boolean {
    if (value === null) {
      return false;
    } else if (typeof value === 'object') {
      return !_.isEmpty(value);
    } else {
      return !!value;
    }
  }
}
