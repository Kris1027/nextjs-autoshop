import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { phone } from '@/lib/data';

export const alt = 'skupAUT - skup samochodów, gotówka od ręki';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo-1.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 56,
        // white instead of the paper tone so the logo's white box blends in
        backgroundColor: '#fff',
      }}
    >
      <img src={logoSrc} alt='' width={480} height={127} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: '#2b2b2b' }}>
          {phone}
        </div>
        {/* default OG font only covers latin + latin-1, so no ą/ę/ł here */}
        <div style={{ fontSize: 34, color: '#e63329' }}>
          Skup samochodów · 7 dni w tygodniu
        </div>
      </div>
    </div>,
    size
  );
}
