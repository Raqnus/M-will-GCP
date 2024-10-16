import InstagramIcon from '@mui/icons-material/Instagram';

// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ml-6 md:ml-20">
          {/* 左カラム */}
          <div>
            <h2 className="text-lg font-semibold mb-4">会社情報</h2>
            <ul>
              <ul></ul>
              <a href="https://hidamari-meal.stores.jp/inquiry">お問い合わせ</a>
            </ul>
          </div>
          {/* 中央カラム */}
          <div>
            <h2 className="text-lg font-semibold mb-4">SNS</h2>
            <ul className="flex space-x-4">
              <li className="space-x-2 "><InstagramIcon/><a href="https://t.co/WeVOkuR9iz" aria-label="Instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2024 Mwill All rights reserved.</p>
        </div>
      </footer>
    );
  }
  