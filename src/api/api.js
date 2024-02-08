import { https } from "./config"

export const authSer = {
    register: (user) => https.post("auth/register", user),
    registerCheckDuplication: (user) => https.post("auth/register-check-duplicate", user),
    login: (user) => https.post("auth/login", user),
    logout: () => https.post("auth/logout"),
    refreshToken: () => https.post("auth/refresh-token"),
    createVerificationCode: (data) =>  https.post("auth/verification-create", data),
    checkVerificationCode: (data) =>  https.post("auth/verification-check", data),
    updateVerificationCode: (data) =>  https.patch("auth/verification-update", data),
}

export const userSer = {
    getProfile: () => https.get('user/get-profile'),
    getPublicProfile: () => https.get('user/get-public-profile'),
    updatePublicProfile: (data) => https.patch('user/update-public-profile', data),
    getUserAvtar: () => https.get('user/get-avatar'),
    getUserEmail: () => https.get('user/get-email'),
    updatePassword: (data) => https.patch('user/update-password', data),
    updateEmail: (data) => https.patch('user/update-email', data),
    deleteAccount: (data) => https.put('user/delete-account', data),

    
}

export const roleSer = {
    getAllRoles: () => https.get('role/get-all'),
    
}

export const socialSer = {
    getSocial: () => https.get('social/get'),
    updateSocial: (data) => https.patch('social/update', data),
    
}


export const creatorSer = {
    getCreators: () => https.get('creator/get-creators')
}


export const brandSer = {
    getAllBrands: () => https.get('brand/get-all'),
    
}