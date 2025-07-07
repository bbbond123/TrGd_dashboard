import CryptoJS from "crypto-js"

/**
 * 密码加密配置
 */
const CRYPTO_CONFIG = {
  // 密钥（实际项目中应该从环境变量获取）
  SECRET_KEY: "ar-backend-secret-key-2024",
  // 算法
  ALGORITHM: "AES",
  // 模式
  MODE: CryptoJS.mode.CBC,
  // 填充
  PADDING: CryptoJS.pad.Pkcs7
}

/**
 * AES加密密码
 * @param password 明文密码
 * @returns 加密后的密码
 */
export function encryptPassword(password: string): string {
  if (!password) return ""

  try {
    // 生成随机IV
    const iv = CryptoJS.lib.WordArray.random(16)

    // 加密
    const encrypted = CryptoJS.AES.encrypt(password, CRYPTO_CONFIG.SECRET_KEY, {
      iv,
      mode: CRYPTO_CONFIG.MODE,
      padding: CRYPTO_CONFIG.PADDING
    })

    // 将IV和加密结果组合
    const result = iv.concat(encrypted.ciphertext)

    // 转换为Base64
    return CryptoJS.enc.Base64.stringify(result)
  } catch (error) {
    console.error("密码加密失败:", error)
    return password // 如果加密失败，返回原密码
  }
}

/**
 * 密码哈希（用于客户端验证）
 * @param password 明文密码
 * @param salt 盐值
 * @returns 哈希后的密码
 */
export function hashPassword(password: string, salt?: string): string {
  if (!password) return ""

  try {
    const saltValue = salt || CryptoJS.lib.WordArray.random(16).toString()
    const hash = CryptoJS.SHA256(password + saltValue).toString()

    // 如果没有提供盐值，则在结果中包含盐值
    if (!salt) {
      return `${saltValue}:${hash}`
    }

    return hash
  } catch (error) {
    console.error("密码哈希失败:", error)
    return password
  }
}

/**
 * 验证密码哈希
 * @param password 明文密码
 * @param hashedPassword 哈希密码（包含盐值）
 * @returns 是否匹配
 */
export function verifyPassword(password: string, hashedPassword: string): boolean {
  if (!password || !hashedPassword) return false

  try {
    const [salt, hash] = hashedPassword.split(":")
    if (!salt || !hash) return false

    const computedHash = hashPassword(password, salt)
    return computedHash === hash
  } catch (error) {
    console.error("密码验证失败:", error)
    return false
  }
}

/**
 * 生成强密码
 * @param length 密码长度
 * @returns 生成的密码
 */
export function generateStrongPassword(length: number = 12): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
  let password = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }

  return password
}

/**
 * 密码强度检测
 * @param password 密码
 * @returns 强度等级 (weak, medium, strong)
 */
export function checkPasswordStrength(password: string): "weak" | "medium" | "strong" {
  if (!password) return "weak"

  let score = 0

  // 长度检查
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1

  // 字符类型检查
  if (/[a-z]/.test(password)) score += 1 // 小写字母
  if (/[A-Z]/.test(password)) score += 1 // 大写字母
  if (/\d/.test(password)) score += 1 // 数字
  if (/[^A-Z0-9]/i.test(password)) score += 1 // 特殊字符

  if (score < 3) return "weak"
  if (score < 5) return "medium"
  return "strong"
}
