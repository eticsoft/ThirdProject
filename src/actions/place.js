import { YER_EKLE } from './types';

export const ekleYer = yerAdi => {
    return {
        type: YER_EKLE,
        payload: yerAdi
    }
}