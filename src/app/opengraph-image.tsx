import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'skupAUT - Kupujemy każde auto. Gotówka od ręki.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo-1.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  // default OG font only covers latin + latin-1, so ą/ę/ż need Manrope
  const manrope = await readFile(
    join(process.cwd(), 'assets/Manrope-ExtraBold.ttf')
  );

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 72,
        padding: 80,
        // white instead of the paper tone so the logo's white box blends in
        backgroundColor: '#fff',
      }}
    >
      <img src={logoSrc} alt='' width={417} height={110} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 92,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: '#2b2b2b',
        }}
      >
        <div style={{ display: 'flex' }}>
          Kupujemy&nbsp;<span style={{ color: '#e63329' }}>każde auto.</span>
        </div>
        <div style={{ display: 'flex' }}>Gotówka od ręki.</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Manrope', data: manrope, style: 'normal', weight: 800 }],
    }
  );
}
