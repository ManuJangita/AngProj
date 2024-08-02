export function AppCustomValidate() {
return (control: any) => {
    let value = control.value;
    return (!value || !value.trim().length || value.length> 4) ? null : { 'AppCustomValidate': { value: control.value }};
}
}
