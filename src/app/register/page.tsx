import Link from "next/link";

export default function Register (){
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Crear Cuenta</h1>
          <p className="text-gray-600 text-sm">Completa los datos para crear tu cuenta</p>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          <form className="space-y-4">
            {/* Username Input */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nombre de Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="tu_usuario"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@ejemplo.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Crear Cuenta
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-gray-500 font-medium">O continúa con</span>
            </div>
          </div>

          {/* Footer Link */}
          <div className="text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-200"
            >
              Inicia Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}