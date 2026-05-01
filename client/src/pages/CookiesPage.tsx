import { motion } from 'motion/react';
import { CookieIcon } from 'lucide-react';
import SoftBackdrop from '../components/SoftBackdrop';

const sections = [
    {
        title: '1. What Are Cookies?',
        content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to remember your actions and preferences over time, so you don't have to keep re-entering information every time you visit or navigate between pages.`,
    },
    {
        title: '2. How ThumbGen Uses Cookies',
        content: `ThumbGen uses cookies strictly for functional purposes. Specifically, we use a session cookie to keep you logged in while you use the app. Without this cookie, you would be logged out every time you navigate to a new page. We do not use cookies for advertising, retargeting, or cross-site tracking.`,
    },
    {
        title: '3. Types of Cookies We Use',
        content: `We use only one category of cookies:\n\nEssential / Functional Cookies — These are required for the core functionality of ThumbGen. They manage your login session and are set only after you sign in. These cookies expire after 7 days of inactivity.\n\nWe do not use analytics cookies, advertising cookies, or third-party tracking cookies.`,
    },
    {
        title: '4. Session Cookies',
        content: `When you log in to ThumbGen, our server creates a session and stores a session ID in a cookie on your browser. This session cookie is:\n\n• HttpOnly — it cannot be accessed by JavaScript on the page.\n• Secure — it is only sent over HTTPS connections in production.\n• SameSite — it is restricted to prevent cross-site request forgery (CSRF) attacks.\n\nYour session data is stored server-side in our MongoDB database, not inside the cookie itself.`,
    },
    {
        title: '5. Third-Party Cookies',
        content: `ThumbGen itself does not set any third-party cookies. However, third-party services we integrate with (such as Cloudinary for image delivery) may set their own cookies when content is loaded from their servers. We recommend reviewing the cookie policies of these third parties independently if you have concerns.`,
    },
    {
        title: '6. Managing & Disabling Cookies',
        content: `You can control or delete cookies through your browser settings at any time. Most browsers allow you to block or delete cookies. However, please note that disabling essential cookies will prevent ThumbGen from functioning correctly — specifically, you will not be able to stay logged in.\n\nTo manage cookies, refer to your browser's help documentation:\n• Chrome: Settings → Privacy and Security → Cookies\n• Firefox: Settings → Privacy & Security → Cookies\n• Safari: Preferences → Privacy → Manage Website Data`,
    },
    {
        title: '7. Cookie Retention',
        content: `Our session cookies are set to expire after 7 days of inactivity. Once expired, you will need to log in again to create a new session. You can also manually end your session at any time by clicking "Logout," which will immediately delete the session cookie from your browser.`,
    },
    {
        title: '8. Changes to This Cookie Policy',
        content: `We may update this Cookie Policy if we change how we use cookies or if regulations require us to do so. Any updates will be reflected on this page with a revised "Last Updated" date. Continued use of ThumbGen after changes are posted constitutes your acceptance of the updated policy.`,
    },
    {
        title: '9. Contact Us',
        content: `If you have any questions about our use of cookies, please contact us at: support@thumbgen.app`,
    },
];

export default function CookiesPage() {
    return (
        <>
            <SoftBackdrop />
            <div className='min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 xl:px-32'>
                <motion.div
                    className='max-w-3xl mx-auto'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Header */}
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='p-2 rounded-lg bg-pink-600/20 border border-pink-500/30'>
                            <CookieIcon className='size-5 text-pink-400' />
                        </div>
                        <span className='text-xs font-medium text-pink-400 uppercase tracking-widest'>Legal</span>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-zinc-100 mb-3'>Cookie Policy</h1>
                    <p className='text-sm text-zinc-500 mb-10'>
                        Last updated: <span className='text-zinc-400'>April 30, 2025</span>
                    </p>

                    <p className='text-zinc-400 leading-relaxed mb-10'>
                        At <span className='text-zinc-200 font-medium'>ThumbGen</span>, we believe in being transparent about how we use technology on our platform. This Cookie Policy explains what cookies are, how we use them, and what choices you have regarding their use.
                    </p>

                    {/* Divider */}
                    <div className='border-t border-white/8 mb-10' />

                    {/* Sections */}
                    <div className='space-y-10'>
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                <h2 className='text-base font-semibold text-zinc-100 mb-3'>{section.title}</h2>
                                <p className='text-zinc-400 leading-7 text-sm whitespace-pre-line'>{section.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer note */}
                    <div className='mt-14 p-5 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-400 leading-relaxed'>
                        ThumbGen uses only essential cookies necessary for the service to function. We are committed to your privacy and do not use cookies for advertising or tracking purposes.
                    </div>
                </motion.div>
            </div>
        </>
    );
}
