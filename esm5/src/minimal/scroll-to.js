/**
 * @experimental
 * Element to move, time in ms to animate
 */
export function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToFromTo(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
function scrollToFromTo(element, from, to, duration) {
    if (duration <= 0) {
        return;
    }
    if (typeof from === 'object') {
        from = from.offsetTop;
    }
    if (typeof to === 'object') {
        to = to.offsetTop;
    }
    createScrollWithAnimation(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}
/**
 * @experimental
 */
export function scrollWithAnimation(element, to, duration, p, motion) {
    var _motion = motion || easeOutCuaic;
    var scrollLeft = element.scrollLeft;
    return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
}
function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
    var scrollT = p === 'y' ? 'scrollTop' : 'scrollLeft';
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element[scrollT] = xTo;
        return;
    }
    element[scrollT] = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(function () {
        createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p);
    }, step);
}
// function linearTween(t: number) {
//   return t;
// }
// function easeInQuad(t: number) {
//   return t * t;
// }
// function easeOutQuad(t: number) {
//   return -t * (t - 2);
// }
// function easeInOutQuad(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t / 2; }
//   t--;
//   return (t * (t - 2) - 1) / 2;
// }
// function easeInCuaic(t: number) {
//   return t * t * t;
// }
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
// function easeInOutCuaic(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t / 2; }
//   t -= 2;
//   return (t * t * t + 2) / 2;
// }
// function easeInQuart(t: number) {
//   return t * t * t * t;
// }
// function easeOutQuart(t: number) {
//   t--;
//   return -(t * t * t * t - 1);
// }
// function easeInOutQuart(t: number) {
//   t /= 0.5;
//   if (t < 1) {return 0.5 * t * t * t * t; }
//   t -= 2;
//   return -(t * t * t * t - 2) / 2;
// }
// function easeInQuint(t: number) {
//   return t * t * t * t * t;
// }
// function easeOutQuint(t: number) {
//   t--;
//   return t * t * t * t * t + 1;
// }
// function easeInOutQuint(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t * t * t / 2; }
//   t -= 2;
//   return (t * t * t * t * t + 2) / 2;
// }
// function easeInSine(t: number) {
//   return -Math.cos(t / (Math.PI / 2)) + 1;
// }
// function easeOutSine(t: number) {
//   return Math.sin(t / (Math.PI / 2));
// }
// function easeInOutSine(t: number) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }
// function easeInExpo(t: number) {
//   return Math.pow(2, 10 * (t - 1));
// }
// function easeOutExpo(t: number) {
//   return -Math.pow(2, -10 * t) + 1;
// }
// function easeInOutExpo(t: number) {
//   t /= 0.5;
//   if (t < 1) {return Math.pow(2, 10 * (t - 1)) / 2; }
//   t--;
//   return (-Math.pow(2, -10 * t) + 2) / 2;
// }
// function easeInCirc(t: number) {
//   return -Math.sqrt(1 - t * t) - 1;
// }
// function easeOutCirc(t: number) {
//   t--;
//   return Math.sqrt(1 - t * t);
// }
// function easeInOutCirc(t: number) {
//   t /= 0.5;
//   if (t < 1) {return -(Math.sqrt(1 - t * t) - 1) / 2; }
//   t -= 2;
//   return (Math.sqrt(1 - t * t) + 1) / 2;
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL21pbmltYWwvc2Nyb2xsLXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsT0FBb0IsRUFBRSxRQUFnQjtJQUM3RCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7UUFDckIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUNqRDtJQUNELGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELCtFQUErRTtBQUMvRSxTQUFTLGNBQWMsQ0FBQyxPQUFvQixFQUFFLElBQVMsRUFBRSxFQUF3QixFQUFFLFFBQWdCO0lBQ2pHLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU87S0FBRTtJQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQUU7SUFDeEQsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztLQUFFO0lBRWxELHlCQUF5QixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE9BQW9CLEVBQ3BCLEVBQVUsRUFDVixRQUFnQixFQUNoQixDQUFhLEVBQ2IsTUFBOEI7SUFFOUIsSUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLFlBQVksQ0FBQztJQUMvQixJQUFBLCtCQUFVLENBQWE7SUFDL0IsT0FBTyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdGLENBQUM7QUFFRCxTQUFTLHlCQUF5QixDQUNoQyxPQUFvQixFQUNwQixLQUFhLEVBQ2IsR0FBVyxFQUNYLEdBQVcsRUFDWCxLQUFhLEVBQ2IsSUFBWSxFQUNaLE1BQTZCLEVBQzdCLENBQWE7SUFFYixJQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUN2RCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sQ0FBRSxPQUFPLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDekIsT0FBTztLQUNSO0lBQ0QsT0FBTyxDQUFFLE9BQU8sQ0FBRSxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFcEIsVUFBVSxDQUFDO1FBQ1QseUJBQXlCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUM7QUFHRCxvQ0FBb0M7QUFDcEMsY0FBYztBQUNkLElBQUk7QUFFSixtQ0FBbUM7QUFDbkMsa0JBQWtCO0FBQ2xCLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCLElBQUk7QUFFSixzQ0FBc0M7QUFDdEMsY0FBYztBQUNkLG9DQUFvQztBQUNwQyxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLElBQUk7QUFFSixTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzdCLENBQUMsRUFBRSxDQUFDO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELHVDQUF1QztBQUN2QyxjQUFjO0FBQ2Qsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKLG9DQUFvQztBQUNwQywwQkFBMEI7QUFDMUIsSUFBSTtBQUVKLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1QsaUNBQWlDO0FBQ2pDLElBQUk7QUFFSix1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLDhDQUE4QztBQUM5QyxZQUFZO0FBQ1oscUNBQXFDO0FBQ3JDLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLElBQUk7QUFFSixxQ0FBcUM7QUFDckMsU0FBUztBQUNULGtDQUFrQztBQUNsQyxJQUFJO0FBRUosdUNBQXVDO0FBQ3ZDLGNBQWM7QUFDZCxnREFBZ0Q7QUFDaEQsWUFBWTtBQUNaLHdDQUF3QztBQUN4QyxJQUFJO0FBRUosbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QyxJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLHdDQUF3QztBQUN4QyxJQUFJO0FBRUosc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3QyxJQUFJO0FBRUosbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxJQUFJO0FBRUosc0NBQXNDO0FBQ3RDLGNBQWM7QUFDZCx3REFBd0Q7QUFDeEQsU0FBUztBQUNULDRDQUE0QztBQUM1QyxJQUFJO0FBRUosbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLFNBQVM7QUFDVCxpQ0FBaUM7QUFDakMsSUFBSTtBQUVKLHNDQUFzQztBQUN0QyxjQUFjO0FBQ2QsMERBQTBEO0FBQzFELFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0MsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICogRWxlbWVudCB0byBtb3ZlLCB0aW1lIGluIG1zIHRvIGFuaW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gIGxldCBlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoZS5zY3JvbGxUb3AgPT09IDApIHtcbiAgICBjb25zdCB0ID0gZS5zY3JvbGxUb3A7XG4gICAgKytlLnNjcm9sbFRvcDtcbiAgICBlID0gdCArIDEgPT09IGUuc2Nyb2xsVG9wLS0gPyBlIDogZG9jdW1lbnQuYm9keTtcbiAgfVxuICBzY3JvbGxUb0Zyb21UbyhlLCBlLnNjcm9sbFRvcCwgZWxlbWVudCwgZHVyYXRpb24pO1xufVxuXG4vLyBFbGVtZW50IHRvIG1vdmUsIGVsZW1lbnQgb3IgcHggZnJvbSwgZWxlbWVudCBvciBweCB0bywgdGltZSBpbiBtcyB0byBhbmltYXRlXG5mdW5jdGlvbiBzY3JvbGxUb0Zyb21UbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZnJvbTogYW55LCB0bzogbnVtYmVyIHwgSFRNTEVsZW1lbnQsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgaWYgKGR1cmF0aW9uIDw9IDApIHsgcmV0dXJuOyB9XG4gIGlmICh0eXBlb2YgZnJvbSA9PT0gJ29iamVjdCcpIHsgZnJvbSA9IGZyb20ub2Zmc2V0VG9wOyB9XG4gIGlmICh0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7IHRvID0gdG8ub2Zmc2V0VG9wOyB9XG5cbiAgY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihlbGVtZW50LCBmcm9tLCB0bywgMCwgMSAvIGR1cmF0aW9uLCAyMCwgZWFzZU91dEN1YWljKTtcbn1cblxuLyoqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxXaXRoQW5pbWF0aW9uKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdG86IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgcD86ICd4JyB8ICd5JyxcbiAgbW90aW9uPzogKHQ6IG51bWJlcikgPT4gbnVtYmVyXG4pIHtcbiAgY29uc3QgX21vdGlvbiA9IG1vdGlvbiB8fCBlYXNlT3V0Q3VhaWM7XG4gIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gZWxlbWVudDtcbiAgcmV0dXJuIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgc2Nyb2xsTGVmdCwgdG8sIDAsIDEgLyBkdXJhdGlvbiwgMjAsIF9tb3Rpb24sIHApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgeEZyb206IG51bWJlcixcbiAgeFRvOiBudW1iZXIsXG4gIHQwMTogbnVtYmVyLFxuICBzcGVlZDogbnVtYmVyLFxuICBzdGVwOiBudW1iZXIsXG4gIG1vdGlvbjogKHQ6IG51bWJlcikgPT4gbnVtYmVyLFxuICBwPzogJ3gnIHwgJ3knXG4pIHtcbiAgY29uc3Qgc2Nyb2xsVCA9IHAgPT09ICd5JyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICBpZiAodDAxIDwgMCB8fCB0MDEgPiAxIHx8IHNwZWVkIDw9IDApIHtcbiAgICBlbGVtZW50WyBzY3JvbGxUIF0gPSB4VG87XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnRbIHNjcm9sbFQgXSA9IHhGcm9tIC0gKHhGcm9tIC0geFRvKSAqIG1vdGlvbih0MDEpO1xuICB0MDEgKz0gc3BlZWQgKiBzdGVwO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgeEZyb20sIHhUbywgdDAxLCBzcGVlZCwgc3RlcCwgbW90aW9uLCBwKTtcbiAgfSwgc3RlcCk7XG59XG5cblxuLy8gZnVuY3Rpb24gbGluZWFyVHdlZW4odDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5RdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLXQgKiAodCAtIDIpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0IC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAodCAqICh0IC0gMikgLSAxKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbkN1YWljKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQgKiB0O1xuLy8gfVxuXG5mdW5jdGlvbiBlYXNlT3V0Q3VhaWModDogbnVtYmVyKSB7XG4gIHQtLTtcbiAgcmV0dXJuIHQgKiB0ICogdCArIDE7XG59XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dEN1YWljKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKHQgKiB0ICogdCArIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0UXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0OyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVpbnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0LS07XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdCArIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0IC8gMjsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAodCAqIHQgKiB0ICogdCAqIHQgKyAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtTWF0aC5jb3ModCAvIChNYXRoLlBJIC8gMikpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiBNYXRoLnNpbih0IC8gKE1hdGguUEkgLyAyKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluRXhwbyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpIC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAoLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5DaXJjKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGguc3FydCgxIC0gdCAqIHQpIC0gMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dENpcmModDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgxIC0gdCAqIHQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKE1hdGguc3FydCgxIC0gdCAqIHQpICsgMSkgLyAyO1xuLy8gfVxuIl19