import { motion } from 'motion/react';
import { ShieldCheckIcon } from 'lucide-react';
import SoftBackdrop from '../components/SoftBackdrop';

const sections = [
    {
        title: '1. Information We Collect',
        content: `When you create an account, we collect your name and email address. When you use ThumbGen to generate thumbnails, we store the parameters you choose (title, style, color scheme, aspect ratio) along with the resulting image URL. We do not collect payment information directly — all billing is handled by our payment provider.`,
    },
    {
        title: '2. How We Use Your Information',
        content: `We use your information solely to provide and improve the ThumbGen service. Specifically, we use it to generate and store your thumbnails, authenticate your account sessions, send transactional emails (e.g., password reset), and analyze aggregated usage patterns to improve our AI models and UI. We do not sell your personal data to third parties.`,
    },
    {
        title: '3. Data Storage & Security',
        content: `Your account data is stored in a secured MongoDB database. Generated thumbnail images are stored on Cloudinary CDN. We use session-based authentication and HTTPS to protect data in transit. While we implement industry-standard security measures, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        title: '4. Third-Party Services',
        content: `ThumbGen integrates with the following third-party services: Google Gemini AI (for image generation), Cloudinary (for image storage and CDN), and MongoDB Atlas (for database hosting). Each of these providers has their own privacy policies that govern how they handle data passed to them. We recommend reviewing their policies independently.`,
    },
    {
        title: '5. Cookies & Sessions',
        content: `We use server-side session cookies to keep you logged in. These cookies are essential for the service to function and are not used for advertising or cross-site tracking. You can clear your cookies at any time through your browser settings, which will log you out of ThumbGen.`,
    },
    {
        title: '6. Your Rights',
        content: `You have the right to access, update, or delete your personal data at any time. You can delete individual thumbnails from your "My Generations" page. To request full account deletion or a data export, contact us at the email below. We will process your request within 30 days.`,
    },
    {
        title: '7. Children\'s Privacy',
        content: `ThumbGen is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
    },
    {
        title: '8. Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. We will notify registered users of significant changes via email or an in-app notice. Continued use of ThumbGen after changes are posted constitutes your acceptance of the updated policy.`,
    },
    {
        title: '9. Contact Us',
        content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at: support@thumbgen.app`,
    },
];

export default function PrivacyPage() {
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
                            <ShieldCheckIcon className='size-5 text-pink-400' />
                        </div>
                        <span className='text-xs font-medium text-pink-400 uppercase tracking-widest'>Legal</span>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-zinc-100 mb-3'>Privacy Policy</h1>
                    <p className='text-sm text-zinc-500 mb-10'>
                        Last updated: <span className='text-zinc-400'>April 30, 2025</span>
                    </p>

                    <p className='text-zinc-400 leading-relaxed mb-10'>
                        At <span className='text-zinc-200 font-medium'>ThumbGen</span>, we take your privacy seriously. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. By using ThumbGen, you agree to the practices described in this policy.
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
                                <p className='text-zinc-400 leading-7 text-sm'>{section.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer note */}
                    <div className='mt-14 p-5 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-400 leading-relaxed'>
                        This policy applies to all users of ThumbGen, including free and paid accounts. By creating an account or using any feature of ThumbGen, you acknowledge that you have read and understood this Privacy Policy.
                    </div>
                </motion.div>
            </div>
        </>
    );
}
