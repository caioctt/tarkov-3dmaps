/** @jsxImportSource @emotion/react */
import PageTitle from '@/components/PageTitle';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Maps from '@/features/Maps';
import { Container, useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default function Home() {
  const theme = useTheme();
  const styles = {
    spacer: css`
      flexgrow: 1;
      [${theme.breakpoints.down('sm')}] {
        flexgrow: 0.2;
        display: 'none';
      }
    `,
    container: css`
      display: 'flex',
      alignItems: 'center',
    ,
      `,
  };
  return (
    <div css={styles.container}>
      <PageTitle
        title="Tarkov 3DMaps"
        subtitle="Credits of all 3DMaps models to RE3MR. Please visit https://reemr.se and support it."
      />
      <div css={styles.spacer} />
      <ThemeSwitcher />
      <Container>
        <Maps />
      </Container>
    </div>
  );
}
