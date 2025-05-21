const axios = require('axios')

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI

const redirectToKakaoLogin = (req, res) => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    res.redirect(kakaoAuthURL)
}

const handleKakaoCallback = async (req, res) => {
    const code = req.query.code

    try {
        const tokenResponse = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    client_id: KAKAO_CLIENT_ID,
                    redirect_uri: REDIRECT_URI,
                    code
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )

        const { access_token } = tokenResponse.data

        const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })

        const kakaoUser = userResponse.data
        const nickname = kakaoUser?.kakao_account?.profile?.nickname

        res.json({
            message: 'User info fetched successfully',
            user: {
                userId: kakaoUser?.id,
                connected_at: kakaoUser.connected_at,
                nickname: nickname || 'Nickname not available',
            }
        })
    } catch (error) {
        console.error(error.response?.data || error.message)
        res.status(500).json({ error: 'OAuth login failed' })
    }
}

module.exports = {
    redirectToKakaoLogin,
    handleKakaoCallback
}
