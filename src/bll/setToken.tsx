export const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([.$?*|{}()\]\\^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
};

export const setCookie = (name: string, value: string | null, age: number) => {
    document.cookie = `${name}=${value};max-age=${age};path=/`;
};