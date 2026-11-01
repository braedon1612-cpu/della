# Version 2 validation

- Production build succeeds; all 12 automated date, content and encryption tests pass.
- Browser: journal draft recovered after refresh; saved/edited entries survived closing the tab and reopening; search filtered correctly; calendar and random-memory selection worked.
- Readable journal backup exported, entry deleted and backup imported successfully. Typed `CLEAR JOURNAL` confirmation cleared the disposable entry and draft.
- Daily blessing favourite persisted across reopening and could be removed.
- Browser sealed an encrypted letter and exported its backup. The exported file contained ciphertext and envelope metadata, with no readable letter, key or password; it decrypted successfully using the correct password in the cryptographic verification check.
- Browser restored an encrypted envelope. A second disposable backup whose opening day had passed tested the unlock interface: incorrect password rejected, correct password displayed the original text, and Close and lock removed it from view.
- Future-dated envelope displayed its countdown without an unlock form. Automated checks cover the exact South African opening-day boundary and reject ciphertext/metadata tampering.
- Responsive phone preview: 375px content width, 375px scroll width (no horizontal overflow). Desktop and phone layouts inspected; no physical iPhone or Android device test was performed.
- All 13 supplied photographs converted to WebP, with orientation respected and metadata removed. Gallery viewer next/previous controls tested; originals remain untouched.
- Disposable journal records, letters and favourites were removed after testing. Browser console reported no errors.

GitHub deployment still needs an accessible repository; the workflow remains ready for the `della` repository. A local preview is not the public website.
