import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
function componentDestroyed(component) {
    const modifiedComponent = component;
    if (modifiedComponent.__componentDestroyed$) {
        return modifiedComponent.__componentDestroyed$;
    }
    const oldNgOnDestroy = component.ngOnDestroy;
    const stop$ = new ReplaySubject();
    modifiedComponent.ngOnDestroy = function () {
        if (oldNgOnDestroy) {
            oldNgOnDestroy.apply(component);
        }
        stop$.next();
        stop$.complete();
    };
    return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}
export function untilComponentDestroyed(component) {
    return (source) => source.pipe(takeUntil(componentDestroyed(component)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWRlc3Ryb3llZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9taW5pbWFsL2NvbXBvbmVudC1kZXN0cm95ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsU0FBUyxrQkFBa0IsQ0FBQyxTQUFvQjtJQUM1QyxNQUFNLGlCQUFpQixHQUFHLFNBR3pCLENBQUM7SUFDRixJQUFJLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFO1FBQ3pDLE9BQU8saUJBQWlCLENBQUMscUJBQXFCLENBQUM7S0FDbEQ7SUFDRCxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFDeEMsaUJBQWlCLENBQUMsV0FBVyxHQUFHO1FBQzVCLElBQUksY0FBYyxFQUFFO1lBQ2xCLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxpQkFBaUIsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDMUUsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBSSxTQUFvQjtJQUMzRCxPQUFPLENBQUMsTUFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudERlc3Ryb3llZChjb21wb25lbnQ6IE9uRGVzdHJveSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IG1vZGlmaWVkQ29tcG9uZW50ID0gY29tcG9uZW50IGFzIHtcbiAgICAgIF9fY29tcG9uZW50RGVzdHJveWVkJD86IE9ic2VydmFibGU8dm9pZD5cbiAgICAgIG5nT25EZXN0cm95PygpOiB2b2lkXG4gICAgfTtcbiAgICBpZiAobW9kaWZpZWRDb21wb25lbnQuX19jb21wb25lbnREZXN0cm95ZWQkKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllZENvbXBvbmVudC5fX2NvbXBvbmVudERlc3Ryb3llZCQ7XG4gICAgfVxuICAgIGNvbnN0IG9sZE5nT25EZXN0cm95ID0gY29tcG9uZW50Lm5nT25EZXN0cm95O1xuICAgIGNvbnN0IHN0b3AkID0gbmV3IFJlcGxheVN1YmplY3Q8dm9pZD4oKTtcbiAgICBtb2RpZmllZENvbXBvbmVudC5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG9sZE5nT25EZXN0cm95KSB7XG4gICAgICAgICAgb2xkTmdPbkRlc3Ryb3kuYXBwbHkoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzdG9wJC5uZXh0KCk7XG4gICAgICAgIHN0b3AkLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gbW9kaWZpZWRDb21wb25lbnQuX19jb21wb25lbnREZXN0cm95ZWQkID0gc3RvcCQuYXNPYnNlcnZhYmxlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnRpbENvbXBvbmVudERlc3Ryb3llZDxUPihjb21wb25lbnQ6IE9uRGVzdHJveSk6IChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBzb3VyY2UucGlwZSh0YWtlVW50aWwoY29tcG9uZW50RGVzdHJveWVkKGNvbXBvbmVudCBhcyBPbkRlc3Ryb3kpKSk7XG59XG4iXX0=