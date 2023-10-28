import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

const password1 = process.env.PASSWORD1;
const username1 = process.env.USERNAME1;
const password2 = process.env.PASSWORD2;
const username2 = process.env.USERNAME2;


export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === username1 || username2 && pwd === password1 || password2) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}