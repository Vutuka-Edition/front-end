import React from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-main text-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">123 Rue de l&apos;Espoir</p>
                  <p className="text-sm text-gray-300">Montréal, QC H2X 1Y2</p>
                  <p className="text-sm text-gray-300">Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <p className="text-sm text-gray-300">+1 (514) 555-0123</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@vutuka-edition.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Nos programmes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Faire un don
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Devenir bénévole
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Nos programmes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Soutien éducatif
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Aide alimentaire
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Soutien psychologique
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Activités récréatives
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Formation professionnelle
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                  Soutien aux familles
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Restez connectés</h3>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Inscrivez-vous à notre newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 text-sm bg-main-hover border border-main-hover rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-400"
                  disabled
                />
                <button className="px-4 py-2 bg-green-new text-white text-sm rounded-r-md hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  S&apos;inscrire
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Suivez-nous</p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-main-hover transition-colors cursor-not-allowed opacity-50">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm text-gray-300">
              <p>&copy; {new Date().getFullYear()} Vutuka Edition. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50">
                Conditions d&apos;utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer