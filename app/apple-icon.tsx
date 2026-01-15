import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#F5F3EE',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40" fill="none">
          <circle cx="15" cy="20" r="12" stroke="#3D3632" strokeWidth="1.5" fill="none" />
          <circle cx="25" cy="20" r="12" stroke="#3D3632" strokeWidth="1.5" fill="none" />
          <path
            d="M20 10.5C17.5 13.5 16 16.5 16 20C16 23.5 17.5 26.5 20 29.5C22.5 26.5 24 23.5 24 20C24 16.5 22.5 13.5 20 10.5Z"
            fill="#C5C9B8"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
