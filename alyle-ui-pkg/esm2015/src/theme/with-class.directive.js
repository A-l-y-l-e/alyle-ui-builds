import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
let LyWithClass = class LyWithClass {
    constructor(el) {
        this.el = el;
    }
    set withClass(val) {
        if (!val) {
            throw new Error(`'${val}' is not valid className`);
        }
        this.el.nativeElement.classList.add(val);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyWithClass.prototype, "withClass", null);
LyWithClass = tslib_1.__decorate([
    Directive({
        selector: '[withClass]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], LyWithClass);
export { LyWithClass };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jbGFzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBU3RCLFlBQ1UsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDcEIsQ0FBQztJQVJMLElBQUksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FJRixDQUFBO0FBVEM7SUFEQyxLQUFLLEVBQUU7Ozs0Q0FNUDtBQVJVLFdBQVc7SUFIdkIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQzs2Q0FXYyxVQUFVO0dBVmIsV0FBVyxDQVl2QjtTQVpZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iXX0=