export function ShareIcon({
    color
}: { color: string }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='23'
            fill='none'
            viewBox='0 0 26 23'
        >
            <path
                fill={color ?? '#78BA5A'}
                d='M14.559 10.377l2.507-3.619 2.507 3.62L17.066 14l-2.507-3.623z'
            ></path>
            <path
                fill={color ?? '#78BA5A'}
                d='M25.356 10.067L14.853.464a.432.432 0 00-.722.318v3.985c-3.922-.259-7.44.968-9.948 3.478a12.969 12.969 0 00-2.866 14.034.432.432 0 00.8-.002c2.512-6.346 6.99-6.41 11.731-6.478.095 0 .19-.003.282-.004v4.194a.432.432 0 00.723.318l10.503-9.603a.433.433 0 000-.637zm-10.363 8.944v-3.655a.43.43 0 00-.44-.432l-.717.01c-4.565.067-9.278.135-12.076 6.005A12.108 12.108 0 014.793 8.853c2.125-2.125 5.042-3.258 8.323-3.258.461 0 .93.023 1.404.068a.432.432 0 00.472-.43V1.762l9.434 8.625-9.433 8.625z'
            ></path>
        </svg>
    );
}