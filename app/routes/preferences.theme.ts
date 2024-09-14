

import { redirectBack } from 'remix-utils/redirect-back'
import { themeCookie } from '../theme.server'
import type { LoaderFunctionArgs } from '@remix-run/server-runtime'

export const action = async ({ request }: LoaderFunctionArgs) => {
    const form = await request.formData()
    const theme = form.get('theme')

    return redirectBack(request, {
        fallback: '/',
        headers: {
            'Set-Cookie': await themeCookie.serialize(theme)
        }
    })
}