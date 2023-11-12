import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};