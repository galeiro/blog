import Link from "components/Link";
import Head from "next/head";

const Custom404 = (): JSX.Element => (
  <>
    <Head>
      <title>404 Page Error</title>
    </Head>
    <div className="flex flex-col gap-2">
      <h1>404 - Halaman tidak ditemukan</h1>
      <p className="text-secondary">
        Mohon maaf, halaman yang anda cari mungkin sudah dihapus atau dipindahkan.
      </p>
      <div className="h-2" />
      <Link href="/" underline>
        Kembali ke beranda
      </Link>
    </div>
  </>
);

export default Custom404;
