import instance from './instance'


export function info() {
  return instance({
    url: '/api/v2/member/detail'
  })
}

export function orders(data) {
  return instance({
    url: '/api/v2/member/orders',
    data: data
  })
}

export function credit1Records(data) {
  return instance({
    url: '/api/v2/member/credit1Records',
    data: data
  })
}

export function inviteUsers(data) {
  return instance({
    url: '/api/v2/member/inviteUsers',
    data: data
  })
}

export function promoCode(data) {
  return instance({
    url: '/api/v2/member/promoCode',
    data: data
  })
}

export function createPromoCode(data) {
  return instance({
    method: 'POST',
    url: '/api/v2/member/promoCode',
    data: data
  })
}

export function messages(data) {
  return instance({
    url: '/api/v2/member/messages',
    data: data
  })
}

export function messageMarkRead(id) {
  return instance({
    url: '/api/v2/member/notificationMarkAsRead/' + id
  })
}

export function getUserRoles(data) {
  return instance({
    url: '/api/v2/member/roles',
    data: data
  })
}

export function courses(data) {
  return instance({
    url: '/api/v2/member/courses',
    data: data
  })
}

export function collectionCourses(data) {
  return instance({
    url: '/api/v2/member/courses/like',
    data: data
  })
}

export function historyCourses(data) {
  return instance({
    url: '/api/v2/member/courses/history',
    data: data
  })
}

export function inviteBalanceRecords(data) {
  return instance({
    url: '/api/v2/member/inviteBalanceRecords',
    data: data
  })
}

export function withdrawRecords(data) {
  return instance({
    url: '/api/v2/member/withdrawRecords',
    data: data
  })
}

export function createWithdraw(data) {
  return instance({
    method: 'POST',
    url: '/api/v2/member/withdraw',
    data: data
  })
}