import { Config } from 'bili'
// @ts-ignore
import packageConfig from './package.json'

const config: Config = {
    input: './src/index.ts',
    output: {
        sourceMap: false
    },
    plugins: {
        vue: true,
    },
    env: {
        VERSION: packageConfig.version
    }
}

export default config
