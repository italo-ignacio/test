/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_NODE_ENV: string;
  readonly VITE_B2C_CLIENT_SECRET: string;
  readonly VITE_B2C_CLIENT_ID: string;
  readonly VITE_B2C_POLICE_SIGNIN: string;
  readonly VITE_B2C_POLICE_SIGNIN_EXTERNAL: string;
  readonly VITE_B2C_POLICE_RECOVER_PASSWORD: string;
  readonly VITE_B2C_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
