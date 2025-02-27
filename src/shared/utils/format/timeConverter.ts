export function timeConverter(date: string | number | Date): string {
  const now = new Date();
  const past = new Date(date);

  if (isNaN(past.getTime())) {
    return "유효하지 않은 날짜입니다.";
  }

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}년 전`;
}

export function timeFormatter(date: string | number | Date): string {
  const writtenDate = new Date(date);
  return `${writtenDate.getFullYear()}년 ${writtenDate.getMonth()}월 ${writtenDate.getDate()}일`;
}

export function dueDayCalculate(date: string | number | Date): string {
  const now = new Date();
  const future = new Date(date);

  if (isNaN(future.getTime())) {
    return "유효하지 않은 날짜입니다.";
  }

  const diffInSeconds = Math.floor((future.getTime() - now.getTime()) / 1000);
  if (diffInSeconds < 0) {
    return "만료되었습니다.";
  }

  if (diffInSeconds > 0 && diffInSeconds < 60) {
    return `D-${diffInSeconds}초 전`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes >= 1 && diffInMinutes < 60) {
    return `D-${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours >= 1 && diffInHours < 25) {
    return `D-${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays >= 1) {
    return `D-${diffInDays}일`;
  }

  return "엥?";
}
