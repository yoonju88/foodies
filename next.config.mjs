/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,   // React의 Strict Mode 활성화 (에러 검출에 유용)
    swcMinify: true,         // SWC를 사용한 코드 최소화 (빌드 최적화)
    poweredByHeader: false,  // X-Powered-By 헤더 비활성화 (보안 강화)
    async redirects() {
      return [
        {
          source: '/old-page',  // 잘못된 페이지 경로가 있는 경우 리디렉션 설정
          destination: '/new-page',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;